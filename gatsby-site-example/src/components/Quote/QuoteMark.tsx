import { utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React from 'react';

const { px } = utils;

const theme = {
  openMarginLeft: -10,
};

const quoteStyles: Styles = {
  quote: {
    display: 'inline-block',
  },

  openQuote: {
    marginLeft: px(theme.openMarginLeft),
  },

  closeQuote: {},
};

interface QuoteOpen extends StylingProps, React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  variant: 'open' | 'close';
}

export const QuoteMark = withNEL(
  quoteStyles
)(({ classes, className, variant, ...props }: QuoteOpen) => (
  <span
    className={cx(classes.quote, classes[`${variant}Quote`], className)}
    {...props}
    aria-hidden
  />
));
