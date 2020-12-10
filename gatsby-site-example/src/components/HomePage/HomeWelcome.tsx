import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Card, Grid, HeadingCabernet, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import { getZIndex } from '@nel-ui/portal-react';
import { FadeIn } from '../../animations';
import BrandQuote from '../BrandQuote/BrandQuote';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';

const { mq, px, em, mergeStyles, proximity } = utils;

interface HeroImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

interface HomeWelcomeProps extends StylingProps {
  blueQuote: string;
  redQuote: string;
  content: ReactNode;
  image: {
    sm: HeroImageProps;
    md: HeroImageProps;
    lg: HeroImageProps;
  };
}

const HomeWelcome = ({
  classes,
  blueQuote,
  redQuote,
  image,
  content,
}: HomeWelcomeProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const readableTitle: string = `${blueQuote + redQuote}`;

  const HeroImage = ({ variant }: { variant: 'sm' | 'md' | 'lg' }) => (
    <img
      {...image[variant]}
      className={cx(classes.bgImage, classes[`${variant}BackgroundImage`])}
      aria-hidden
    />
  );

  return (
    <FadeIn ref={ref} active={inView} className={classes.welcome}>
      <HeroImage variant="sm" />

      <Grid>
        <Grid.Col
          span={{
            sm: 12,
            w768: 8,
          }}
          offset={{
            sm: 0,
            w768: 4,
          }}
        >
          <HeroImage variant="md" />
          <HeroImage variant="lg" />
        </Grid.Col>

        <Grid.Col
          className={classes.welcomeContent}
          span={{
            sm: 12,
            w768: 6,
          }}
        >
          <Card className={classes.contentCard}>
            <Card.Body className={classes.contentCardBody}>
              <HeadingCabernet
                level={1}
                className={classes.homePageTitle}
                aria-label={readableTitle}
              >
                {blueQuote} <BrandQuote type="red">{redQuote}</BrandQuote>
              </HeadingCabernet>

              {content}
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid>
    </FadeIn>
  );
};

const mediumDown: string = `@media (max-width: ${em(foundationTheme.breakpoint768 - 1)})`;
const largeDown: string = `@media (max-width: ${em(foundationTheme.breakpoint1020 - 1)})`;

const homeWelcomeTheme = {
  imageMediumBorderRadius: 4,
  contentOffsetLarge: 32,
  cardBorderRadius: 12,
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

    [mediumDown]: {
      marginTop: 0,
    },

    [mq.viewportMd]: {
      minHeight: px(400),
    },
  }),

  welcomeContent: {
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

    [mediumDown]: {
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
      margin: `0 0 ${px(theme.contentOffsetLarge)} 0`,
      borderRadius: px(12),
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      position: 'absolute',
      left: px(12),
      bottom: 0,
      right: 0,
    },
  },

  contentCardBody: {
    // Note - saves 6 overrides as card uses spacing()
    paddingLeft: '0 !important',
  },

  bgImage: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',

    [mq.breakpoint768]: {
      borderRadius: theme.imageMediumBorderRadius,
    },

    '&$smBackgroundImage': {
      isolate: 0,

      [mq.breakpoint768]: {
        isolate: 0,
        extend: 'hideContent',
      },
    },

    '&$mdBackgroundImage': {
      isolate: 0,

      [mediumDown]: {
        extend: 'hideContent',
      },

      [mq.breakpoint1020]: {
        extend: 'hideContent',
      },
    },

    '&$lgBackgroundImage': {
      isolate: 0,

      [largeDown]: {
        extend: 'hideContent',
      },
    },
  },

  // REFACTOR ABOVE
  homePageTitle: {
    color: theme.colourBrand01,
  },

  /*
   * States
   */
  smBackgroundImage: {},
  mdBackgroundImage: {},
  lgBackgroundImage: {},

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
