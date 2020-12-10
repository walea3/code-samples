import React from 'react';
import { Grid } from '@nel-ui/react';
import ParagraphImageBlock from '../../components/ParagraphImageBlock';

const ParagraphImageGrid = ({ paragraphImages }) => (
  <Grid>
    {paragraphImages.map((paragraphImage, i) => (
      <ParagraphImageBlock
        key={`paragraphImage-${i}`}
        heading={paragraphImage.heading}
        text={paragraphImage.text}
        isLarge={paragraphImage.isFullWidth}
        image={{ src: paragraphImage.image }}
      />
    ))}
  </Grid>
);

export default ParagraphImageGrid;
