import React, { AnchorHTMLAttributes } from 'react';

import cx from 'classnames';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { theme as linkTheme } from '@nel-ui/link-styles';
import { Link, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

const { px, mq, spacer } = utils;

const NavigationLink = ({
  classes,
  children,
  href,
  className,
  active = false,
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  StylingProps & {
    active?: boolean;
  }) => (
  <Link
    href={href}
    aria-current={active ? 'page' : undefined}
    className={cx(classes.navItem, className, {
      [classes.navItemActive]: active,
    })}
    active={active}
  >
    {children}
  </Link>
);

const theme = { ...foundationTheme, ...linkTheme };

const styles: Styles = {
  navItem: {
    display: 'inline-flex',
    height: 'inherit',

    '& > span': {
      isolate: 0,

      [mq.screenLg]: {
        isolate: 0,
        marginTop: px(spacer(9)),
      },
    },

    '&:not(:first-child)': {
      isolate: 0,
      marginLeft: spacer(7),
    },

    '&:not($navItemActive) span': {
      isolate: 0,
      border: 'transparent',
    },
  },

  navItemActive: {
    color: theme.linkInteractionColour,

    '& span': {
      isolate: 0,
      borderWidth: `${px(spacer())}`,
      borderBottomColor: theme.linkInteractionColour,

      [mq.screenLg]: {
        borderWidth: `${px(6)}`,
      },
    },
  },
};

export default withNEL(styles)(NavigationLink);
