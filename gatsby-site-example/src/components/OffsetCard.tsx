import React, { ReactNode } from 'react';

import { utils } from '@nel-ui/foundations';
import { Card, Grid, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

// import NelWelcomeImg from '../images/home-page/nel-welcome-full.png';

const { px, mq, mergeStyles } = utils;

const positionOptions = ['left', 'right'] as const;

interface OffsetCardProps extends StylingProps {
  children: ReactNode;
  position: typeof positionOptions[number];
  // offsetView: ReactNode | string; // TODO: Support ReactNode!!
  offsetView: string;
}

// TODO: Consider consumer requires refactor
const OffsetCard = ({ classes, position, offsetView, children }: OffsetCardProps) => {
  const isPositionLeft: boolean = position === 'left';
  const isPositionRight: boolean = position === 'right';

  const imageAlignLeft = isPositionLeft ? 'start' : undefined;
  const imageAlignRight = isPositionRight ? 'end' : undefined;

  const getImageAlignment = imageAlignLeft || imageAlignRight;
  const isOffsetString: boolean = typeof offsetView === 'string';

  const offsetUi = isOffsetString
    ? { style: { backgroundImage: `url(${offsetView})` } }
    : { children: offsetView };

  // const maxWidthImage: number = 840;
  // const maxContainerDiff: number = 420;

  // const offsetAlignmentProps = isPositionLeft ? { offset: { sm: 0, lg: 4 } } : {};
  const offsetAlignmentProps = isPositionLeft ? {} : {};

  const offsetNode = (
    <Grid.Col
      className={classes.offsetBgColumn}
      // span={8}
      span={{ sm: 12, lg: 6 }}
      {...offsetAlignmentProps}
    >
      <div
        className={cx(classes.offsetBgImage, {
          [classes.offsetLeft]: isPositionLeft,
          [classes.offsetRight]: isPositionRight,
        })}
        {...offsetUi}
      />
    </Grid.Col>
  );

  return (
    <div className={classes.offsetCardWrapper}>
      {/* <div
        className={cx(classes.offsetContainer, classes[`${position}Align`], {
          [classes.offsetWithBackground]: isOffsetString,
        })}
        {...offsetUi}
      /> */}

      <Grid align={getImageAlignment}>
        {isPositionRight && offsetNode}

        <Grid.Col span={{ sm: 12, lg: 6 }}>
          <Card className={classes.offsetCard}>
            <Card.Body className={classes.welcomeCardBody}>{children}</Card.Body>
          </Card>
        </Grid.Col>

        {isPositionLeft && offsetNode}
      </Grid>
    </div>
  );
};

OffsetCard.positionOptions = positionOptions;

const maxWidthImage: number = 840;
const maxContainerDiff: number = 420;

// Todo = move hard coded references here...
const offsetCardTheme = {
  offsetCardMarginTop: 245,
  offsetBackgroundContainer: 40,
};

const theme = {
  ...offsetCardTheme,
};

const styles: Styles = {
  offsetCardWrapper: mergeStyles({
    isolate: 0,
    maxWidth: px(2000),
    margin: '0 auto',
    overflow: 'hidden',

    '&:not(:first-of-type)': {
      isolate: 0,
      marginTop: px(60),

      [mq.screenLg]: {
        isolate: 0,
        marginTop: px(120),
      },
    },

    [mq.screenLg]: {
      height: px(780),
    },
  }),

  offsetContainer: {
    isolate: 0,
    height: px(220),
    overflow: 'hidden',

    [mq.screenLg]: {
      height: 'inherit',
    },
  },

  offsetBgColumn: {
    isolate: 0,
    position: 'relative',
  },

  offsetBgImage: {
    isolate: 0,
    width: px(maxWidthImage + maxContainerDiff),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 700,
    position: 'absolute',
    top: 0,
    bottom: 0,

    '&$offsetLeft': {
      isolate: 0,
      left: 0,
    },

    '&$offsetRight': {
      isolate: 0,
      right: 0,
    },
  },

  // Refactor
  offsetLeft: {},
  offsetRight: {},
  // Refactor End

  offsetCard: mergeStyles({
    isolate: 0,
    position: 'relative',
    maxWidth: px(600),
    boxShadow: 'none',
    margin: `${px(-50)} 0 0 ${px(-25)}`,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

    [mq.screenLg]: {
      margin: `${px(theme.offsetCardMarginTop)} 0 0 0`,
      borderRadius: px(12),
    },
  }),

  /**
   * States
   */
  leftAlign: {
    isolate: 0,

    [mq.screenLg]: {
      marginLeft: `${theme.offsetBackgroundContainer}%`,
    },
  },

  rightAlign: {
    isolate: 0,

    [mq.screenLg]: {
      marginRight: `${theme.offsetBackgroundContainer}%`,
    },
  },

  offsetWithBackground: {
    isolate: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
};

export default withNEL(styles)(OffsetCard);
