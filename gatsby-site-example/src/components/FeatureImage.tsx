import cx from 'classnames';
import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const { px, em } = utils;

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

interface MultipleFeatureImages {
  sm: ImageProps;
  lg: ImageProps;
}

export interface FeatureImageProps extends StylingProps {
  className?: string;
  media: ImageProps | MultipleFeatureImages;
}

const FeatureImage = ({ className, media, classes }: FeatureImageProps) => {
  const isMediaDefined: boolean = !!media;

  if (!isMediaDefined) return null;

  const isSingleImage: boolean =
    media.hasOwnProperty('childImageSharp') || media.hasOwnProperty('src');

  const mediaImages: ImageProps[] = isSingleImage ? [media] : Object.values(media);
  const mediaKeys: string[] = Object.keys(media);

  return (
    <div className={cx(classes.featureImageContainer, className)}>
      {mediaImages.map((image, i) => {
        const breakpoint: string = isSingleImage ? 'full' : mediaKeys[i];
        const altValue: string = image.alt ? image.alt : '';

        return (
          <PreviewCompatibleImage
            key={`feature-image-${i}`}
            className={cx(classes.featureImage, classes[`${breakpoint}Image`])}
            imageInfo={{ image: image.src || image, alt: altValue }}
            aria-hidden
          />
        );
      })}
    </div>
  );
};

const smallDown: string = `@media (max-width: ${em(foundationTheme.breakpoint768 - 1)})`;
const mediumUp: string = `@media (min-width: ${em(foundationTheme.breakpoint768)})`;

const featureImageTheme = {
  imageBorderRadius: 4,
};

const theme = {
  ...foundationTheme,
  ...featureImageTheme,
};

const styles: Styles = {
  featureImageContainer: {
    borderRadius: px(theme.imageBorderRadius),
    overflow: 'hidden',
  },

  featureImage: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',

    '&$smImage': {
      isolate: 0,
      [mediumUp]: {
        display: 'none',
      },
    },

    '&$lgImage': {
      isolate: 0,
      [smallDown]: {
        display: 'none',
      },
    },
  },

  smImage: {},
  lgImage: {},
  fullImage: {},
};

export default withNEL(styles)(FeatureImage);
