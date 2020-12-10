import { Grid, HeadingCabernet, P, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

import FeatureCard from '../FeatureCard';

interface GuideItemProps {
  title: string;
  content: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface GuidesPageProps extends StylingProps {
  title: string;
  content: string;
  pages: GuideItemProps[];
}

const GuidesPage = ({ title, content, pages, classes }: GuidesPageProps) => (
  <>
    <Grid>
      <Grid.Col span={{ sm: 12, md: 10, lg: 8 }}>
        <HeadingCabernet level={1}>{title}</HeadingCabernet>

        {content}
      </Grid.Col>
    </Grid>

    <Grid className={classes.pagesWrapper}>
      {pages.map(({ content: cardContent, ...page }, i) => (
        <Grid.Col key={`guide-item-${i}`} span={{ sm: 12, md: 6, lg: 4 }}>
          <FeatureCard {...page}>
            <P>{cardContent}</P>
          </FeatureCard>
        </Grid.Col>
      ))}
    </Grid>
  </>
);

const styles: Styles = {
  pagesWrapper: {
    isolate: 0,
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
};

export default withNEL(styles)(GuidesPage);
