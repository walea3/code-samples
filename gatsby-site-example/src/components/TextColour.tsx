import React, { ReactText } from 'react';

import { theme as foundationTheme } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

const colours = ['blue', 'red'] as const;

export interface TextColourProps extends StylingProps {
  className?: string;
  colour: typeof colours[number];
  children: ReactText;
}

const TextColour = ({ className, classes, colour, children }: TextColourProps) => (
  <span className={cx(classes[`${colour}Brand`], className)}>{children}</span>
);

TextColour.colours = colours;

const theme = { ...foundationTheme };

const styles: Styles = {
  blueBrand: {
    color: theme.colourBrand01,
  },

  redBrand: {
    color: theme.colourBrand02,
  },
};

export default withNEL(styles)(TextColour);
