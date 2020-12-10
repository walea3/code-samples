import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Link, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React from 'react';

const { spacer, px } = utils;

interface SideBarLink extends StylingProps, React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
  active?: boolean;
}

const SideBarLink = ({
  children,
  classes,
  active = false,
  className,
  ...props
}: SideBarLink) => (
  <Link
    className={cx(classes.sideBarLink, className, {
      [classes.sideBarLinkActive]: active,
    })}
    {...props}
    active={active}
  >
    {children}
  </Link>
);

const sideBarItemTheme = {
  linkItemHeight: spacer(11),
  linkItemPadding: 10,
  activeBorderSize: 4,
  fontSize: px(18),
  lineHeight: px(18),
};

const theme = {
  ...foundationTheme,
  ...sideBarItemTheme,
};

export const activeBorder: string = `${px(theme.activeBorderSize)} solid ${
  theme.colourInteractionFeedback100
}`;

const styles: Styles = {
  sideBarLink: {
    isolate: 0,
    position: 'relative',
    display: 'block',
    minHeight: px(theme.linkItemHeight),
    padding: `${px(theme.linkItemPadding)} 0`,
    fontWeight: 'normal',
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,

    '&$sideBarLinkActive:before': {
      content: '""',
      position: 'absolute',
      top: px(6),
      left: px(-24),
      borderLeft: activeBorder,
      height: px(32),
    },
  },

  /**
   * States
   */
  sideBarLinkActive: {},
};

export default withNEL(styles)(SideBarLink);
