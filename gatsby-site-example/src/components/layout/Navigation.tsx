import React, { ReactNode } from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { theme as linkTheme } from '@nel-ui/link-styles';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import useMainMenu from '../../hooks/useMainMenu';
import { isCurrentPage } from '../../utils/location';

import NavigationLink from './NavigationLink';

const { px, mq, spacer, mergeStyles } = utils;

interface NavigationProps extends StylingProps {
  actions: ReactNode;
  path: string;
  className?: string;
}

const Navigation = ({ className, classes, actions, path }: NavigationProps) => {
  const { pages } = useMainMenu();

  return (
    <nav className={cx(className, classes.siteNav)}>
      {pages.map(({ page: { fields: { slug }, frontmatter: { title } }, label }, i) => (
        <NavigationLink
          key={`navigation-link-${i}`}
          href={slug}
          active={isCurrentPage(slug, false, path)}
        >
          {label || title}
        </NavigationLink>
      ))}

      {actions && <div className={classes.actionsWrapper}>{actions}</div>}
    </nav>
  );
};

export const largeNavigationHeight: number = 100;

const theme = {
  ...foundationTheme,
  ...linkTheme,
  largeNavigationHeight,
};

const styles: Styles = {
  siteNav: {
    display: 'flex',
    alignItems: 'center',
    height: 40,

    [mq.breakpoint768]: {
      height: theme.largeNavigationHeight,
    },
  },

  navItem: {
    display: 'inline-flex',
    height: 'inherit',

    [mq.breakpoint768]: {
      '& > span': {
        marginTop: px(38),
      },
    },

    [mq.breakpoint768]: {
      '& > span': {
        marginTop: px(34),
      },
    },

    '&:not(:first-child)': {
      isolate: 0,
      marginLeft: spacer(7),
    },

    '&$navItemActive': mergeStyles({
      isolate: 0,
      color: theme.linkInteractionColour,

      '& span': {
        isolate: 0,
        borderWidth: `${px(4)}`,
        borderBottomColor: theme.linkInteractionColour,
      },

      [mq.breakpoint768]: {
        '& span': {
          borderWidth: `${px(6)}`,
        },
      },
    }),

    '&:not($navItemActive) span': {
      isolate: 0,
      border: 'transparent',
    },
  },

  navItemActive: {},

  actionsWrapper: {
    display: 'none',

    [mq.breakpoint480]: {
      display: 'block',
    },
  },

  askNelModal: {
    display: 'inline-flex',
  },
};

export default withNEL(styles)(Navigation);
