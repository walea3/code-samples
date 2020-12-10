import { theme as foundationTheme } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React from 'react';

export interface NelBoldProps
  extends React.HTMLAttributes<HTMLBaseFontElement>,
    StylingProps {
  children: string;
}

const NelBold = ({ className, classes, children, ...props }: NelBoldProps) => (
  <b className={cx(classes.nelBold, className)} {...props}>
    {children}
  </b>
);

const theme = {
  boldFontWeight: foundationTheme.fontWeightBold,
  boldFontColor: foundationTheme.colourTextHeadline,
};

const styles: Styles = {
  nelBold: {
    isolate: 0,
    fontWeight: theme.boldFontWeight,
    color: theme.boldFontColor,
  },
};
export default withNEL(styles)(NelBold);
