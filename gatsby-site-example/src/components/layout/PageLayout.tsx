import { utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React, { cloneElement, ReactElement, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import pkg from '../../../package.json';
import { SkipContent } from '../SkipContent';
import Footer from './Footer';
import SiteHeader from './SiteHeader';

import { sideBarTheme, visibleBreakpoint } from '../../components/SideBar/SideBar';

import footerService from '../../services/footer.service';

// NOTE: Page Height requires navigation offset
import { largeNavigationHeight } from './Navigation';

const { mq, px, em } = utils;

interface SeoProps {
  title: string;
  description: string;
}

interface PageProps extends StylingProps {
  left?: ReactElement;
  children: ReactNode;
  seo: SeoProps;
  path: string;
}

export const nelHeaderId: string = 'nelSiteHeader';
export const nelAccessibilityLinksId: string = 'nelAccessibilityLinks';
export const nelBodyId: string = 'nelSiteBody';
export const nelContentId: string = 'nelSiteContent';
export const nelFooterId: string = 'nelSiteFooter';

const PageLayout = ({ children, left, classes, seo, path }: PageProps) => {
  const definedLeftSlot: boolean = !!left;

  return (
    <div className={classes.siteContainer}>
      {!!seo && (
        <Helmet>
          <html lang="en" />
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-57x57.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-114x114.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-72x72.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-144x144.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-60x60.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-120x120.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-76x76.png')}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href={require('@nel-ui/foundations/icons/favicons/apple-touch-icon-152x152.png')}
          />
          <link
            rel="icon"
            type="image/png"
            href={require('@nel-ui/foundations/icons/favicons/favicon-196x196.png')}
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href={require('@nel-ui/foundations/icons/favicons/favicon-96x96.png')}
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href={require('@nel-ui/foundations/icons/favicons/favicon-32x32.png')}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={require('@nel-ui/foundations/icons/favicons/favicon-16x16.png')}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={require('@nel-ui/foundations/icons/favicons/favicon-128.png')}
            sizes="128x128"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content={require('@nel-ui/foundations/icons/favicons/mstile-144x144.png')}
          />
          <meta
            name="msapplication-square70x70logo"
            content={require('@nel-ui/foundations/icons/favicons/mstile-70x70.png')}
          />
          <meta
            name="msapplication-square150x150logo"
            content={require('@nel-ui/foundations/icons/favicons/mstile-150x150.png')}
          />
          <meta
            name="msapplication-square310x310logo"
            content={require('@nel-ui/foundations/icons/favicons/mstile-310x310.png')}
          />
        </Helmet>
      )}

      <SkipContent id={nelAccessibilityLinksId} defaultContentId={nelContentId} />

      <SiteHeader
        id={nelHeaderId}
        path={path}
        className={cx(classes.nelHeader, {
          [classes.nelHeaderSidebar]: definedLeftSlot,
        })}
      />

      <div className={classes.page}>
        {definedLeftSlot &&
          cloneElement(left, {
            className: classes.leftSlot,
          })}

        <div
          id={nelBodyId}
          className={cx(classes.pageContent, {
            [classes.leftOffsetActive]: definedLeftSlot,
          })}
        >
          <main id={nelContentId} className={classes.pageContentInner}>
            {children}
          </main>

          <Footer
            id={nelFooterId}
            className={classes.footer}
            {...footerService(nelHeaderId, pkg.version)}
          />
        </div>
      </div>
    </div>
  );
};

const theme = {
  leftOffset: sideBarTheme.menuWidthLg,
  headerIndexSm: sideBarTheme.zIndexTint - 1,
  headerIndexLg: sideBarTheme.zIndexTint + 2,
  mobileLeftSlotzIndex: sideBarTheme.zIndexTint + 2,
  pageHeight: `calc(100% - ${px(largeNavigationHeight)})`,
};

const mobileLeftSlot: string = `@media (max-width: ${em(visibleBreakpoint)})`;

const styles: Styles = {
  '@global': {
    'html, body, #___gatsby, #___gatsby > div, #gatsby-focus-wrapper': {
      height: '100%',
      minHeight: '100%',
    },

    body: {
      margin: 0,
    },

    '#gatsby-focus-wrapper': {
      // @TODO remove placeholder once isolate reset styles fixed for SSR
      '& *': {
        isolate: 0,
        boxSizing: 'border-box',
      },
    },
  },

  siteContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  nelHeader: {
    position: 'relative',
    zIndex: theme.headerIndexSm,
    flexShrink: 0,

    [mq.breakpoint1020]: {
      zIndex: theme.headerIndexLg,
    },
  },

  nelHeaderSidebar: {
    // Note: Sidebar & Logo are now flush
    [mq.breakpoint1020]: {
      '& > div': {
        isolate: 0,
        paddingLeft: px(8),
      },
    },
  },

  page: {
    position: 'relative',
    display: 'flex',
    flex: '1 0 auto',
    height: theme.pageHeight,
  },

  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },

  pageContentInner: {
    position: 'relative',
    flexShrink: 0,
  },

  leftSlot: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',

    [mobileLeftSlot]: {
      position: 'fixed',
      zIndex: theme.mobileLeftSlotzIndex,
      overflow: 'hidden',
      overflowY: 'auto',
    },
  },

  footer: {
    flexShrink: 0,
  },

  /**
   * States
   */
  leftOffsetActive: {
    [mq.breakpoint1020]: {
      marginLeft: px(theme.leftOffset),
    },
  },
};

export default withNEL(styles)(PageLayout);
