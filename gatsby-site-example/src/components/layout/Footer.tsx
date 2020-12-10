import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Grid, Link, Small, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React from 'react';

import { scrollToId } from '../../utils';

const { px, mq } = utils;

interface FooterListProps {
  value: string;
}

interface FooterLinkProps {
  href: string;
  value: string;
}

export interface NelFooterProps
  extends StylingProps,
    React.AllHTMLAttributes<HTMLDivElement> {
  footerAction: FooterLinkProps;
  items?: FooterListProps[];
}

const NelFooter = ({
  className,
  items = [],
  footerAction,
  classes,
  ...props
}: NelFooterProps) => (
  <div className={cx(className, classes.footer)} {...props}>
    <Grid className={classes.footerContainer}>
      <Grid.Col span={{ w600: 9 }}>
        <nav className={classes.footerList}>
          {items.map(({ value, ...item }, i) => (
            <Small key={`nel-item-${i}`} className={classes.footerItem} {...item}>
              {value}
            </Small>
          ))}
        </nav>
      </Grid.Col>

      <Grid.Col className={classes.buttonWrapper} span={{ w600: 3 }}>
        <Small inline>
          <Link
            className={classes.footerLink}
            href={`#${footerAction.href}`}
            onClick={scrollToId}
          >
            {footerAction.value}
          </Link>
        </Small>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col>
        <hr className={classes.footerBar} />
      </Grid.Col>
    </Grid>
  </div>
);

const footerTheme = {
  footerProximity: {
    sm: 60,
    lg: 120,
  },
  footerHeight: 100,
  footerBackgroundColour: foundationTheme.colourSecondaryNavy300,
  footerBorderWidth: 4,
  footerTextColour: foundationTheme.colourBrand03,
  footerContainerMaxWidth: 1200,
  footerVerticalPadding: {
    sm: 30,
    viewport600: 38,
  },
  linkSeparatorSpacing: 10,
  linkSeparatorWidth: 1,
  linkSeparatorHeight: 14,
  linkSeparatorBackgroundColour: foundationTheme.colourBrand03,
  buttonWrapperOffset: 16,
};

const theme = {
  ...foundationTheme,
  ...footerTheme,
};
export const footerBorder: string = `${px(footerTheme.footerBorderWidth)} solid ${
  foundationTheme.colourBrand02
}`;
const styles: Styles = {
  footer: {
    isolate: 0,
    backgroundColor: theme.footerBackgroundColour,
    marginTop: px(theme.footerProximity.sm),
    overflow: 'hidden',

    '& small': {
      isolate: 0,
      margin: 0,
      color: theme.footerTextColour,
    },

    [mq.screenLg]: {
      marginTop: px(theme.footerProximity.lg),
    },
  },

  footerContainer: {
    isolate: 0,
    paddingTop: px(theme.footerVerticalPadding.sm),
    paddingBottom: px(theme.footerVerticalPadding.sm),

    [mq.breakpoint600]: {
      paddingTop: px(theme.footerVerticalPadding.viewport600),
      paddingBottom: px(theme.footerVerticalPadding.viewport600),
    },
  },

  footerList: {
    isolate: 0,
    display: 'flex',
    flexDirection: 'column',

    [mq.breakpoint600]: {
      flexDirection: 'row',
    },
  },

  footerItem: {
    isolate: 0,
    display: 'inline-flex',
    alignItems: 'center',

    '&:not(:first-of-type):before': {
      isolate: 0,

      [mq.breakpoint600]: {
        content: '""',
        margin: `0 ${px(theme.linkSeparatorSpacing)}`,
        display: 'inline-flex',
        width: px(theme.linkSeparatorWidth),
        height: px(theme.linkSeparatorHeight),
        backgroundColor: theme.linkSeparatorBackgroundColour,
      },
    },
  },

  footerLink: {},

  buttonWrapper: {
    isolate: 0,
    marginTop: px(theme.buttonWrapperOffset),

    '& $footerLink': {
      isolate: 0,
      color: theme.footerTextColour,

      '& > span,\
       &:hover > span,\
       &:focus > span': {
        isolate: 0,
        borderBottomColor: theme.footerTextColour,
      },
    },

    [mq.breakpoint600]: {
      marginTop: 0,
      textAlign: 'right',
    },
  },

  footerBar: {
    display: 'block',
    width: '100%',
    border: footerBorder,
    borderBottom: 'none',
  },
};

export default withNEL(styles)(NelFooter);
