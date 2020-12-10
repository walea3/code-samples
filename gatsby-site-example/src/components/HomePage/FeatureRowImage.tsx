import React from 'react';

import { utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import { defaultDelay } from '../../animations/animations.constants';

const { mq } = utils;

interface ImageAttr extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

interface AnimatedStylesResponse {
  images: any;
  styles: any;
}

interface AnimatedStylesProps extends ImageAttr {
  breakpoints?: any;
  style: any;
}

export const useFeatureAnimatedStyles = (
  data: AnimatedStylesProps[]
): AnimatedStylesResponse => {
  const generatedImages = data.map(({ breakpoints, style, ...img }) => img);

  const featureStyles = data.reduce(
    (animatedImages, { breakpoints, style }, i) => ({
      ...animatedImages,
      [`&:nth-child(${i + 1})`]: {
        isolate: 0,
        ...style,
        ...Object.keys(breakpoints).reduce((viewports, breakpoint) => {
          const imageBreakpoint = mq[`${breakpoint}`];

          return {
            ...viewports,
            [imageBreakpoint]: breakpoints[breakpoint],
          };
        }, {}),
      },
    }),
    {}
  );

  return {
    images: generatedImages,
    styles: featureStyles,
  };
};

export interface FeatureRowImageProps extends StylingProps {
  active: boolean;
  images?: ImageAttr[];
}

const FeatureRowImage = ({ classes, active, images }: FeatureRowImageProps) => {
  if (!images || (images && !images.length)) return null;

  return (
    <div
      className={cx(classes.graphicContainer, {
        [classes.graphicContainerLoadImages]: active,
      })}
    >
      {images.map(({ className, alt, ...image }) => {
        const altValue: string = alt ? alt : '';

        return (
          <img
            key={image.src}
            className={cx(classes.graphicImage, className)}
            {...image}
            alt={altValue}
            aria-hidden
          />
        );
      })}
    </div>
  );
};

const styles: Styles = {
  graphicContainer: {
    width: '100%',
    maxWidth: 650,
    position: 'relative',
    paddingBottom: '57%',

    '&$graphicContainerLoadImages $graphicImage': {
      isolate: 0,
      opacity: 1,
      transform: 'scale(1)',
    },
  },

  graphicImage: {
    height: 'auto',
    position: 'absolute',
    opacity: 0,
    transform: 'scale(0.8)',
    transition: `all 150ms ease-in, opacity ${defaultDelay}ms ease-in`,
  },

  graphicContainerLoadImages: {},
};

export default withNEL(styles)(FeatureRowImage);
