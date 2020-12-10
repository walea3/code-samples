import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { getZIndex } from '@nel-ui/portal-react';
import { Grid, HeadingCabernet, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React, { ReactElement, ReactNode } from 'react';

import Contents, { ContentsProps } from '../Contents';
import FeatureImage, { FeatureImageProps } from '../FeatureImage';
import Contributors, { ContributorsProps } from './Contributors';

import { useWindowSize } from '../../hooks';

const { mq, px, em, mergeStyles, proximity } = utils;

interface GuideDetailPageProps extends StylingProps {
  publishedDate: string;
  contributors: ContributorsProps['contributors'];
  title: string;
  children: ReactNode;
  heroImages: FeatureImageProps['media'];
  titleData: ContentsProps['list'];
  intro?: ReactElement;
}

const GuideDetailPage = ({
  publishedDate,
  title,
  intro,
  heroImages,
  children,
  titleData,
  contributors,
  classes,
}: GuideDetailPageProps) => {
  const { width } = useWindowSize();

  const contentBreakpoint = foundationTheme.breakpoint1020;
  const guidePageGridSpan = (isSidebar = false) => ({
    w320: 11,
    [`w${contentBreakpoint}`]: isSidebar ? 4 : 8,
  });

  const fixTableOfContent = width >= foundationTheme[`breakpoint${contentBreakpoint}`];

  return (
    <>
      <Grid className={classes.featureImageGrid}>
        <Grid.Column className={classes.featureImage}>
          <FeatureImage media={heroImages} />
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column span={guidePageGridSpan()} className={classes.introContent}>
          <HeadingCabernet className={classes.heading} level={1}>
            {title}
          </HeadingCabernet>

          {intro}

          <Contributors {...{ contributors, publishedDate }} />
        </Grid.Column>

        <Grid.Column span={guidePageGridSpan(true)}>
          <Contents list={titleData} fixed={fixTableOfContent} hasBar />
        </Grid.Column>

        <Grid.Column span={guidePageGridSpan()}>{children}</Grid.Column>
      </Grid>
    </>
  );
};

const guideDetailTheme = {
  contentZIndex: getZIndex(1),
  contentBeforeHiddenZIndex: getZIndex('hidden'),
};

const theme = {
  ...foundationTheme,
  ...guideDetailTheme,
};

const mediumDown: string = `@media (max-width: ${em(theme.breakpoint1020 - 1)})`;

export const styles: Styles = {
  featureImage: {
    [mediumDown]: {
      padding: 0,
    },
  },

  featureImageGrid: {
    extend: 'featureImage',
    [mq.screenLg]: mergeStyles(proximity(9), {}),
  },

  whiteBlock: {
    position: 'relative',
    zIndex: theme.contentZIndex,

    '&:before': {
      [mediumDown]: {
        content: '""',
        display: 'block',
        background: 'inherit',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: px(-12),
        zIndex: theme.contentBeforeHiddenZIndex,
      },
    },
  },

  introContent: {
    extend: 'whiteBlock',

    position: 'relative',
    marginTop: '-64px',
    borderTopRightRadius: px(12),
    background: 'white',

    [mq.breakpoint768]: {
      marginTop: '-88px',
    },
  },

  heading: {
    marginTop: px(24),

    [mq.breakpoint768]: {
      marginTop: px(40),
    },
  },

  desktopContentsColumn: {
    [mq.breakpoint1020]: {
      order: 1,
    },
  },

  readableDesktopContents: {
    extend: 'desktopContents',
  },

  desktopContents: {
    display: 'none',

    [mq.breakpoint1020]: {
      display: 'block',
    },
  },
};

export default withNEL(styles)(GuideDetailPage);
