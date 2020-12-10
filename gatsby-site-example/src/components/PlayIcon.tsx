import React, { SyntheticEvent } from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

const { px, mq, mergeStyles } = utils;

interface PlayIconProps extends StylingProps, React.HTMLAttributes<HTMLButtonElement> {
  onClick(event: SyntheticEvent): void;
}

const PlayIcon = ({ classes, className, onClick, ...props }: PlayIconProps) => (
  <button
    className={cx(classes.redCircle, className)}
    onClick={(event) => {
      event.preventDefault();

      onClick(event);
    }}
    {...props}
  >
    <span className={classes.playIcon} />
  </button>
);

const createArrow = (size) => ({
  borderTop: `${px(size * 1.5)} solid transparent`,
  borderBottom: `${px(size * 1.5)} solid transparent`,
  borderLeft: `${px(size * 2)} solid white`,
  transform: `translateX(${px(size / 2)})`,
});

const playIconTheme = {
  playIconInteractionBlur: 4,
  playIconInteractionBorderSize: 4,
};

const theme = { ...foundationTheme, ...playIconTheme };

const styles: Styles = {
  redCircle: mergeStyles({
    isolate: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    background: theme.colourBrand02,
    border: 0,
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',

    [mq.screenLg]: {
      width: 120,
      height: 120,
    },

    '&:active, &:focus': {
      isolate: 0,
      boxShadow: `0 0 ${px(theme.playIconInteractionBlur)} ${px(
        theme.playIconInteractionBorderSize
      )} ${theme.colourInteractionFeedback50}`,
    },
  }),

  playIcon: {
    pointerEvents: 'none',
    width: 0,
    height: 0,
    ...createArrow(4),

    [mq.screenLg]: createArrow(8),
  },
};

export default withNEL(styles)(PlayIcon);
