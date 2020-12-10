import React, { ReactNode, ReactText } from 'react';

import { utils } from '@nel-ui/foundations';
import { Grid, H3, P, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const { px, proximity, mergeStyles } = utils;

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  heading: ReactText;
  description: ReactNode;
  image: string | object;
  isLarge: boolean;
  hasImageFirst: boolean;
}

export interface ImagesContainerProps extends StylingProps {
  blocks: ImageProps[];
}

const ImagesWithTitleDesc = ({ classes, blocks }: ImagesContainerProps) => (
  <Grid>
    {blocks.map(
      ({ heading, description, image, hasImageFirst, isLarge, ...props }, i) => {
        const img = (
          <PreviewCompatibleImage
            className={classes.image}
            imageInfo={{ image: image || props.src, alt: props.alt }}
          />
        );

        return (
          <Grid.Column key={`image-block-${i}`} span={{ w600: isLarge ? 12 : 6 }}>
            {hasImageFirst && img}
            {heading && <H3 className={classes.heading}>{heading}</H3>}
            {!hasImageFirst && img}
            {description && <P>{description}</P>}
          </Grid.Column>
        );
      }
    )}
  </Grid>
);

export const styles: Styles = {
  heading: mergeStyles(proximity(6), {
    isolate: 0,
  }),

  image: mergeStyles(proximity(6), {
    maxWidth: '100%',
    border: '1px solid #d8d8d8',
    borderRadius: px(4),
  }),
};

export default withNEL(styles)(ImagesWithTitleDesc);
