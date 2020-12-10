import React, { ReactText } from 'react';

import { theme as foundationTheme } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

const types = ['blue', 'red'] as const;

export interface BrandQuoteProps extends StylingProps {
  className?: string;
  type: typeof types[number];
  children: ReactText;
}

const BrandQuote = ({ className, classes, type, children }: BrandQuoteProps) => (
  <span className={cx(classes.brandQuote, classes[`${type}Brand`], className)}>
    {children}
  </span>
);

BrandQuote.types = types;

const theme = { ...foundationTheme };

const styles: Styles = {
  brandQuote: {},

  /**
   * States
   */
  blueBrand: {
    isolate: 0,
    color: theme.colourBrand01,
  },

  redBrand: {
    isolate: 0,
    color: theme.colourBrand02,
  },
};

export default withNEL(styles)(BrandQuote);
