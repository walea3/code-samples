import cx from 'classnames';
import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';

const { mq, px } = utils;

interface MenuTogglerProps extends StylingProps {
  className?: string;
  'aria-label'?: string;
  isOpen: boolean;
  onClick(): void;
}

const MenuToggler = ({ isOpen, className, classes, ...props }: MenuTogglerProps) => (
  <button
    tabIndex={0}
    className={cx(className, classes.hamburglar, {
      [classes.hamburglarOpen]: isOpen,
    })}
    {...props}
  >
    <span />
    <span />
    <span />
  </button>
);

const menuTogglerTheme = {
  menuTogglerTabletSize: 48,
  menuTogglerMobileSize: 60,
  menuToggleBackgroundColor: foundationTheme.colourInteractionPrimary,
  menuToggleItemWidth: 16,
  menuToggleItemHeight: 2,
  menuToggleFocusBoxShadowSize: 4,
  menuToggleItemBackground: foundationTheme.colourBrand03,
  menuToggleItemOffset: 2,
  menuToggleItemTransition: 'all 0.2s ease-in-out',
};

const theme = {
  ...foundationTheme,
  ...menuTogglerTheme,
};

const styles = {
  hamburglar: {
    width: px(theme.menuTogglerTabletSize),
    height: px(theme.menuTogglerTabletSize),
    borderRadius: '50%',
    background: theme.menuToggleBackgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 0,

    [mq.breakpoint600]: {
      width: px(theme.menuTogglerMobileSize),
      height: px(theme.menuTogglerMobileSize),
    },

    '&:focus': {
      isolate: 0,
      boxShadow: `0 0 0 ${px(theme.menuToggleFocusBoxShadowSize)} ${
        theme.colourInteractionFeedback50
      }`,
    },

    '& span': {
      isolate: 0,
      width: px(theme.menuToggleItemWidth),
      height: px(theme.menuToggleItemHeight),
      background: theme.menuToggleItemBackground,
      display: 'block',
      margin: px(theme.menuToggleItemOffset),
      transition: theme.menuToggleItemTransition,

      '&:nth-child(2)': {
        isolate: 0,
        width: px(12),
        marginLeft: px(-3),
      },
    },
  },

  hamburglarOpen: {
    '& span': {
      isolate: 0,

      '&:nth-child(1)': {
        isolate: 0,
        transform: 'translateY(6px) rotate(45deg)',
      },

      '&:nth-child(2)': {
        isolate: 0,
        opacity: 0,
      },

      '&:nth-child(3)': {
        isolate: 0,
        transform: 'translateY(-6px) rotate(-45deg)',
      },
    },
  },
};

export default withNEL(styles)(MenuToggler);
