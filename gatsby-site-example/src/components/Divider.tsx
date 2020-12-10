import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React from 'react';

const { px, mergeStyles, proximity } = utils;

interface DividerProps extends StylingProps, React.HTMLAttributes<HTMLHRElement> {
  id?: string;
}

const Divider = ({ classes, className, ...props }: DividerProps) => (
  <hr className={cx(classes.nelSiteDivider, className)} {...props} />
);

const dividerTheme = {
  dividerBorder: foundationTheme.solidBorder,
};

const theme = {
  ...foundationTheme,
  ...dividerTheme,
};

const styles: Styles = {
  nelSiteDivider: mergeStyles(proximity(9), {
    isolate: 0,
    display: 'inline-block',
    width: '100%',
    borderTop: 0,
    borderBottom: theme.dividerBorder,
  }),
};

export default withNEL(styles)(Divider);
