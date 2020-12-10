import { utils } from '@nel-ui/foundations';
import { Heading, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React, { ReactChild } from 'react';

import { Author, AuthorProps } from '..';
import { QuoteMark } from './QuoteMark';

const { px, mq, clearProximity, proximity, mergeStyles, spacer } = utils;

const quoteMessage = {
  quoteMessageBarWidth: 4,
  quoteProximityLargeViewportSm: spacer(6),
  quoteProximityLargeViewportMd: spacer(7),
  quoteProximityLargeViewportLg: spacer(9),
  quotePaddingLeftSmallViewport: spacer(5),
};

const theme = { ...quoteMessage };

const styles: Styles = {
  quoteContainer: {
    position: 'relative',
    marginLeft: px(theme.quoteMessageBarWidth),

    '&$quoteContainerLg': mergeStyles({
      isolate: 0,
      paddingLeft: px(theme.quoteProximityLargeViewportSm),

      [mq.breakpoint480]: {
        paddingLeft: px(theme.quoteProximityLargeViewportMd),
      },

      [mq.breakpoint1020]: {
        paddingLeft: px(theme.quoteProximityLargeViewportLg),
      },

      '& $quoteOpenMark': {
        isolate: 0,
        marginLeft: px(-16),

        [mq.breakpoint480]: {
          marginLeft: px(-19),
        },

        [mq.breakpoint1020]: {
          marginLeft: px(-21),
        },
      },
    }),

    '&$quoteContainerSm': mergeStyles(proximity(5), {
      isolate: 0,
      paddingLeft: px(theme.quotePaddingLeftSmallViewport),
    }),
  },

  quoteMessageBar: {
    position: 'absolute',
    top: 0,
    left: px(-theme.quoteMessageBarWidth),
    bottom: 0,
    width: px(theme.quoteMessageBarWidth),
  },

  quoteHeading: clearProximity(),

  quoteAuthor: {
    '& > h2': {
      isolate: 0,
      marginLeft: px(-21),
    },
  },

  quoteContainerLg: {},
  quoteContainerSm: {},
  quoteOpenMark: {},
};

export interface QuoteMessageProps extends AuthorProps, StylingProps {
  message: ReactChild;
  name: string;
  barColour: string;
  variant?: 'small' | 'large';
}

export const QuoteMessage = withNEL(styles)(
  ({
    classes,
    message,
    className,
    image,
    name,
    role,
    barColour,
    variant = 'small',
    ...props
  }: QuoteMessageProps) => {
    const isSmall: boolean = variant === 'small';
    const isLarge: boolean = variant === 'large';
    const authorProps = { image, name, role };

    return (
      <blockquote
        className={cx(classes.quoteContainer, className, {
          [classes.quoteContainerSm]: isSmall,
          [classes.quoteContainerLg]: isLarge,
        })}
        {...props}
      >
        <div className={classes.quoteMessageBar} style={{ background: barColour }} />

        <Heading
          as="p"
          className={classes.quoteHeading}
          level={isLarge ? 2 : 4}
          variant={isLarge ? 'cabernet' : 'default'}
        >
          <QuoteMark variant="open" className={classes.quoteOpenMark}>
            “
          </QuoteMark>
          {message}
          <QuoteMark variant="close">”</QuoteMark>
        </Heading>

        <Author className={classes.quoteAuthor} {...authorProps} />
      </blockquote>
    );
  }
);
