import React, { ReactNode } from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import linkStyles from '@nel-ui/link-styles';
import { Heading, Link, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import FeatureImage, { FeatureImageProps } from './FeatureImage';

const { proximity, mergeStyles, px, spacing } = utils;

const contentLevel = [2, 3, 4] as const;

export interface FeatureCardProps extends StylingProps {
  link: string;
  title: string;
  animated?: boolean;
  children?: ReactNode;
  level?: typeof contentLevel[number];
  image: FeatureImageProps['media'];
}

const FeatureCard = ({
  title,
  link,
  children,
  level = 4,
  classes,
  image,
  animated = true,
}: FeatureCardProps) => (
  <article
    className={cx(classes.featureCard, {
      [classes.featureCardAnimated]: animated,
    })}
  >
    <Link className={classes.featureCardLink} tabIndex={-1} href={link} aria-hidden>
      {null}
    </Link>

    <FeatureImage media={image} className={classes.featureCardBackground} />

    <div className={cx(classes.featureCardContent, classes[`${getHeadingLevel(level)}`])}>
      <Heading {...{ level }} className={classes.featureCardTitle}>
        <Link href={link}>{title}</Link>
      </Heading>

      {children}
    </div>
  </article>
);

const getHeadingLevel = (level: number): string => `headingLevel${level}`;

const featureCardZIndexBase: number = 1;

const featureCardTheme = {
  featureCardBackgroundLinkZIndex: undefined,
  featureCardFeatureTitleZIndex: undefined,
  featureCardProximity: 8,
  featureCardContentTopRightBorderRadius: 6,
  contentBottomOffset: 6,
  featureCardContentTopPadding: 24,
  [`${getHeadingLevel(2)}Offset`]: -64,
  [`${getHeadingLevel(3)}Offset`]: -52,
  [`${getHeadingLevel(4)}Offset`]: -46,
};

// TODO: Refactor this base from zIndex list
featureCardTheme.featureCardBackgroundLinkZIndex = featureCardZIndexBase + 1;
featureCardTheme.featureCardFeatureTitleZIndex =
  featureCardTheme.featureCardBackgroundLinkZIndex + 1;

const theme = {
  ...foundationTheme,
  ...featureCardTheme,
};

const styles: Styles = {
  featureCard: mergeStyles(proximity(theme.featureCardProximity), {
    position: 'relative',

    '&$featureCardAnimated:hover': {
      isolate: 0,

      '& $featureCardBackground *': {
        isolate: 0,
        cursor: 'pointer',
        transform: 'scale(1.08)',
      },

      '& $featureCardTitle span': {
        isolate: 0,
        extend: linkStyles.interactionLink,
      },
    },
  }),

  featureCardLink: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.featureCardBackgroundLinkZIndex,

    '&:focus': {
      isolate: 0,
      outline: 'none',
    },
  },

  featureCardBackground: {
    overflow: 'hidden',

    '& *': {
      isolate: 0,
      transition: 'transform 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    },
  },

  featureCardContent: mergeStyles(
    spacing('margin', 'right'),
    spacing('padding', 'right'),
    {
      position: 'relative',
      borderTopRightRadius: px(theme.featureCardContentTopRightBorderRadius),
      background: theme.colourBrand03,
      paddingTop: px(theme.featureCardContentTopPadding),
    }
  ),

  featureCardTitle: {
    position: 'relative',
    display: 'block',
    margin: 0,
    zIndex: theme.featureCardFeatureTitleZIndex,
  },

  /*
   * UI States
   */

  // default title level objects
  ...contentLevel.reduce(
    (acc, level) => ({
      ...acc,
      [getHeadingLevel(level)]: {
        '&$featureCardContent': {
          isolate: 0,
          marginTop: px(theme[`${getHeadingLevel(level)}Offset`]),
        },
      },
    }),
    {}
  ),

  featureCardAnimated: {},
};

export default withNEL(styles)(FeatureCard);
