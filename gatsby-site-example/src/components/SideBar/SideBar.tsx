import FocusTrap from 'focus-trap-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';

import { getZIndex } from '@nel-ui/portal-react';
import { Accordion, BackgroundTint, H4, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import MenuToggler from './MenuToggler';
import SideBarItem from './SideBarItem';
import SideBarLink from './SideBarLink';

import { useSticky } from '../../hooks/';
import useDesignSystemMenu from '../../hooks/useDesignSystemMenu';
import { isCurrentPage, toggleAriaHiddenById } from '../../utils/';
import { nelAccessibilityLinksId, nelBodyId, nelHeaderId } from '../layout/PageLayout';

const { mq, px, spacer } = utils;

interface SideBarProps extends StylingProps {
  className?: string;
  path: string;
}

export const visibleBreakpoint = foundationTheme.breakpoint1020;

const SideBar = ({ classes, className, path }: SideBarProps) => {
  const ref = useRef<HTMLElement>();
  const { overviewPage, menus } = useDesignSystemMenu();
  const isSticky = useSticky(ref);
  const isClient = typeof window === 'object';
  const getWindowWidth = () => (isClient ? window.innerWidth : undefined);

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const isMenuOpen: boolean = isOpen || windowWidth >= visibleBreakpoint;
  const OptionalFocus = isOpen ? FocusTrap : Fragment;
  const optionalFocusProps = isOpen
    ? {
        focusTrapOptions: {
          onDeactivate: () => setIsOpen(false),
        },
      }
    : {};

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => setWindowWidth(getWindowWidth());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Note: custom media query disable
    document.body.classList[isOpen ? 'add' : 'remove'](classes.disableScroll);

    // NOTE: hide background content for screen readers when open
    toggleAriaHiddenById([nelHeaderId, nelAccessibilityLinksId, nelBodyId], isOpen);
  }, [isOpen]);

  return (
    <OptionalFocus {...optionalFocusProps}>
      <div>
        <MenuToggler
          aria-label="toggle mobile navigation"
          className={classes.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          {...{ isOpen }}
        />

        <aside
          ref={ref}
          className={cx(classes.contentMenu, className, {
            [classes.contentMenuOpen]: isMenuOpen,
            [classes.sticky]: isSticky,
          })}
        >
          <div className={classes.contentOverview}>
            <SideBarLink
              href={overviewPage.fields.slug}
              active={isCurrentPage(overviewPage.fields.slug, true, path)}
            >
              {overviewPage.frontmatter.title}
            </SideBarLink>
          </div>

          {!!menus.length && (
            <>
              <Accordion
                className={classes.designSystemMenu}
                items={menus.map(({ heading, overviewPage: page, pages = [] }) => {
                  const categoryPage = {
                    page: {
                      ...page,
                      frontmatter: { ...page.frontmatter, title: 'Overview' },
                    },
                  };

                  return {
                    className: classes.designSystemMenuItem,
                    defaultOpen: isCurrentPage(page.fields.slug, false, path),
                    heading: (
                      <H4 as="span" className={classes.designSystemMenuHeading}>
                        {heading}
                      </H4>
                    ),
                    children: (
                      <SideBarItem path={path} links={[categoryPage, ...pages]} />
                    ),
                  };
                })}
              />
            </>
          )}
        </aside>

        <BackgroundTint
          onClick={() => setIsOpen(false)}
          className={cx(classes.sidebarTint, {
            [classes.sidebarTintActive]: isOpen,
          })}
        />
      </div>
    </OptionalFocus>
  );
};

const zIndexBase: number = getZIndex(5);

export const sideBarTheme = {
  menuWidthSm: 'calc(100vw - (20px + 48px + 20px))',
  menuWidthLg: 280,
  menuItemMarginLeft: spacer(6),
  contentMenuBackgroundColour: foundationTheme.colourBrand03,
  tintTransitionDuration: 125,
  zIndexTint: zIndexBase,
  zIndexToggle: zIndexBase + 1,
  zIndexMenu: zIndexBase + 1,
  sideBarToggleOffset: 20,
  sideBarMenuItemFontSize: 18,
  sideBarMenuOverviewMarginTop: 32,
  sideBarMenuOverviewMarginBottom: 12,
  sideBarMenuOverviewPaddingRight: 8,
  sideBarButtonVerticalPadding: 23,
  sideBarButtonPaddingRight: 4,
};

const theme = {
  ...foundationTheme,
  ...sideBarTheme,
};

const styles: Styles = {
  noSelect: {
    userSelect: 'none',
  },

  disableScroll: {
    overflow: 'hidden',

    [mq.breakpoint1020]: {
      overflow: 'auto',
    },
  },

  contentMenu: {
    composes: '$noSelect',
    width: theme.menuWidthSm,
    margin: 0,
    paddingRight: 0,
    borderRight: `${px(1)} solid #d0d0d2`,
    overflow: 'auto',
    backgroundColor: theme.contentMenuBackgroundColour,
    zIndex: theme.zIndexMenu,

    '& > div': {
      isolate: 0,
      paddingRight: 0,
    },

    '& > *': {
      composes: 'noSelect',
    },

    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-out',

    [mq.breakpoint480]: {
      width: px(theme.menuWidthLg),
    },

    [mq.breakpoint1020]: {
      left: 0,
      transform: 'translateX(0)',
    },
  },

  sticky: {
    [mq.breakpoint1020]: {
      position: 'fixed',
    },
  },

  contentMenuOpen: {
    left: 0,
    transform: 'translateX(0)',
  },

  contentOverview: {
    marginTop: px(theme.sideBarMenuOverviewMarginTop),
    marginBottom: px(theme.sideBarMenuOverviewMarginBottom),
    marginLeft: px(theme.menuItemMarginLeft),
  },

  mobileToggle: {
    position: 'fixed',
    bottom: px(theme.sideBarToggleOffset),
    right: px(theme.sideBarToggleOffset),
    zIndex: theme.zIndexToggle,

    [mq.breakpoint1020]: {
      display: 'none',
    },
  },

  designSystemMenu: {},

  designSystemMenuItem: {
    marginLeft: px(theme.menuItemMarginLeft),
    paddingRight: px(theme.sideBarMenuOverviewPaddingRight),

    '& > [type="button"]': {
      isolate: 0,
      paddingTop: px(theme.sideBarButtonVerticalPadding),
      paddingBottom: px(theme.sideBarButtonVerticalPadding),

      '& [role="button"]': {
        isolate: 0,
        top: px(14),
      },
    },
  },

  designSystemMenuHeading: {
    margin: 0,
    fontSize: px(theme.sideBarMenuItemFontSize),
  },

  sidebarTint: {
    zIndex: theme.zIndexTint,
    opacity: 0,
    pointerEvents: 'none',
    transition: `opacity ${theme.tintTransitionDuration}ms ease-in`,

    '&$sidebarTintActive': {
      isolate: 0,
      opacity: 1,
      pointerEvents: 'all',
    },

    // Note: Tint is not required for large screens
    [mq.breakpoint1020]: {
      display: 'none',
    },
  },

  sidebarTintActive: {},
};

export default withNEL(styles)(SideBar);
