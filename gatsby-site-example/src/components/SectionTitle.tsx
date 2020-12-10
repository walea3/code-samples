import { utils } from '@nel-ui/foundations';
import { Grid, HeadingCabernet, P, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

const { mergeStyles, proximity, clearProximity } = utils;

export interface SectionTitleProps extends StylingProps {
  heading: string;
  children: string;
}

const SectionTitle = ({ classes, heading, children, ...props }: SectionTitleProps) => (
  <Grid align="center" className={classes.sectionTitle} {...props}>
    <Grid.Col span={{ sm: 12, md: 10, lg: 8 }}>
      <HeadingCabernet level={2} className={classes.sectionTitleHeading}>
        {heading}
      </HeadingCabernet>

      <P className={classes.sectionTitleContent} lead>
        {children}
      </P>
    </Grid.Col>
  </Grid>
);

const styles: Styles = {
  sectionTitle: proximity(8),

  sectionTitleHeading: mergeStyles(clearProximity(), {
    textAlign: 'center',
  }),

  sectionTitleContent: mergeStyles(proximity(4), {
    textAlign: 'center',
  }),
};

export default withNEL(styles)(SectionTitle);
