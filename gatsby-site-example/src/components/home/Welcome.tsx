import React, { ReactNode } from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { getZIndex } from '@nel-ui/portal-react';
import { Card, Grid, HeadingCabernet, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import TextColour from '../TextColour';

const { mq, px, em, mergeStyles, spacer, proximity } = utils;

// interface HeroImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
//   src: string;
//   alt: string;
// }

interface HomeWelcomeProps extends StylingProps {
  heading: Array<{ text: string; isRed: boolean }>;
  body: ReactNode;
  video: {
    imageSrc?: string;
    imageAlt?: string;
  };
  // image: {
  //   sm: HeroImageProps;
  //   md: HeroImageProps;
  //   lg: HeroImageProps;
  // };
}

const HomeWelcome = ({ classes, heading = [], body, video = {} }: HomeWelcomeProps) => {
  const headingLabel: string = heading.reduce(
    (headingText, { text }) => `${headingText} ${text}`,
    ''
  );

  const videoImage = { src: video.imageSrc, alt: video.imageAlt };
  const image = { sm: videoImage, lg: videoImage, md: videoImage };

  return (
    <section className={classes.welcome}>
      <img className={cx(classes.bgImage, classes.bgImageSmall)} {...image.sm} />

      <Grid>
        <Grid.Col span={{ sm: 12, w480: 10, lg: 9 }} offset={{ sm: 0, w480: 2, lg: 3 }}>
          <img className={cx(classes.bgImage, classes.bgImageLarge)} {...image.lg} />
          <img className={cx(classes.bgImage, classes.bgImageMedium)} {...image.md} />
        </Grid.Col>

        <Grid.Col
          className={classes.body}
          span={{ sm: 12, w480: 10, lg: 5 }}
          offset={{ sm: 0, w480: 0, lg: 0 }}
        >
          <Card className={classes.contentCard}>
            <Card.Body className={classes.contentCardBody}>
              <HeadingCabernet
                level={1}
                className={classes.homePageTitle}
                aria-label={headingLabel}
              >
                {heading.map(({ text, isRed }, i) =>
                  isRed ? (
                    <TextColour colour="red" key={i}>{`${text} `}</TextColour>
                  ) : (
                    `${text} `
                  )
                )}
              </HeadingCabernet>

              {body}
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid>
    </section>
  );
};

const smallDown: string = `@media (max-width: ${em(foundationTheme.breakpoint480 - 1)})`;
const mediumUp: string = `@media (min-width: ${em(foundationTheme.breakpoint480)})`;
const largeDown: string = `@media (max-width: ${em(foundationTheme.breakpoint1020 - 1)})`;
const breakpoint480To1020: string = `@media (min-width: ${em(
  foundationTheme.breakpoint480
)}) and (max-width: ${em(foundationTheme.breakpoint1020 - 1)})`;

const setFontSizeAndHeight = ({ fontSize, lineHeight }) => ({
  fontSize: px(fontSize),
  lineHeight: px(lineHeight),
});

const homeWelcomeTheme = {
  imageMediumBorderRadius: 4,
  contentOffsetLarge: 32,
  cardBorderRadius: 12,
  titleFontSize: {
    v320: {
      fontSize: 36,
      lineHeight: 40,
    },
    v480: {
      fontSize: 40,
      lineHeight: 44,
    },
    v768: {
      fontSize: 56,
      lineHeight: 60,
    },
    v1260: {
      fontSize: 72,
      lineHeight: 76,
    },
  },
  cardPosition: {
    sm: -56,
    md: -60,
    lg: -76,
  },
};

const theme = {
  ...foundationTheme,
  ...homeWelcomeTheme,
};

const styles: Styles = {
  welcome: mergeStyles(proximity(8), {
    isolate: 0,

    [smallDown]: {
      marginTop: 0,
    },
  }),

  body: {
    position: 'relative',
  },

  contentCard: {
    position: 'relative',
    zIndex: getZIndex(1),
    boxShadow: 'none',
    marginTop: 0,
    borderRadius: theme.cardBorderRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

    [smallDown]: {
      marginTop: px(theme.cardPosition.sm),

      '&:before': {
        isolate: 0,
        extend: 'whiteBlock',
      },
    },

    [mq.breakpoint480]: {
      marginTop: px(theme.cardPosition.md),
    },

    [mq.breakpoint768]: {
      marginTop: px(theme.cardPosition.lg),
    },

    [mq.breakpoint1260]: {
      marginTop: 0,
    },

    [mq.viewportLg]: {
      margin: 0,
      marginBottom: px(theme.contentOffsetLarge),
      borderRadius: px(12),
      position: 'absolute',
      left: px(16),
      bottom: 0,
    },
  },

  contentCardBody: {
    paddingLeft: '0 !important',

    [largeDown]: {
      paddingTop: `${px(spacer(5))} !important`,
      paddingBottom: '0 !important',
    },
  },

  bgImage: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',

    [mq.breakpoint480]: {
      borderRadius: theme.imageMediumBorderRadius,
    },

    '&$bgImageSmall': {
      isolate: 0,

      [mediumUp]: {
        isolate: 0,
        extend: 'hideContent',
      },
    },

    '&$bgImageMedium': {
      isolate: 0,
      extend: 'hideContent',

      [breakpoint480To1020]: {
        isolate: 0,
        display: 'block',
      },
    },

    '&$bgImageLarge': {
      isolate: 0,
      [largeDown]: {
        isolate: 0,
        extend: 'hideContent',
      },
    },
  },

  // REFACTOR ABOVE
  homePageTitle: {
    [mq.breakpoint320]: setFontSizeAndHeight(theme.titleFontSize.v320),
    [mq.breakpoint480]: setFontSizeAndHeight(theme.titleFontSize.v480),
    [mq.breakpoint768]: setFontSizeAndHeight(theme.titleFontSize.v768),

    // @note: force word break to next line (has to be single line on mobile)
    [mq.breakpoint1020]: {
      maxWidth: px(300),
    },
    [mq.breakpoint1260]: {
      maxWidth: px(400),
      ...setFontSizeAndHeight(theme.titleFontSize.v1260),
    },
  },

  /*
   * States
   */
  bgImageSmall: {},
  bgImageMedium: {},
  bgImageLarge: {},

  hideContent: {
    display: 'none',
  },

  /** Custom UI */
  whiteBlock: {
    position: 'absolute',
    left: '-100%',
    content: "''",
    display: 'block',
    height: '100%',
    width: '100%',
    background: 'inherit',
  },
};

export default withNEL(styles)(HomeWelcome);
