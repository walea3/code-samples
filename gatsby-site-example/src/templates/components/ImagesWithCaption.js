import React from 'react';
import { Grid, P } from '@nel-ui/react';
import ImageContainer from '../../components/ImageContainer';

const ImagesWithCaption = ({ images }) => (
  <Grid>
    {images.map((image, i) => (
      <Grid.Column key={`image-${i}`} span={{ w480: 12 }}>
        <ImageContainer src={image.image} />
        <P>{image.caption}</P>
      </Grid.Column>
    ))}
  </Grid>
);

export default ImagesWithCaption;
