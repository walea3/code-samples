import { Grid, H3, P } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';

import ImageContainer, { ImageContainerProps } from './ImageContainer';

import React from 'react';

export interface ParagraphImageBlockProps extends StylingProps {
  heading: string;
  text: string;
  isLarge: boolean;
  image: ImageContainerProps;
}

export const ParagraphImageBlock = ({
  heading,
  text,
  isLarge,
  image,
}: ParagraphImageBlockProps) => (
  <Grid.Column span={{ w480: 6, w1020: isLarge ? 12 : 6 }}>
    <H3>{heading}</H3>
    <ImageContainer {...image} />
    <P>{text}</P>
  </Grid.Column>
);

export default ParagraphImageBlock;
