import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Logo, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import { theme as linkTheme } from '@nel-ui/link-styles';

const { spacer, px, em } = utils;

type NelLogoProps = StylingProps;

const NelSiteLogo = ({ classes }: NelLogoProps) => (
  <div className={classes.NelLogoWrapper}>
    <Logo type="small" className={classes.NelLogo} />
    <label className={classes.NelLogoTitle}>Noop Experience Language</label>
  </div>
);

const theme = {
  ...foundationTheme,
  ...linkTheme,
};

const largeDown: string = `@media (max-width: ${em(foundationTheme.breakpoint768 - 1)})`;

const styles: Styles = {
  NelLogoWrapper: {
    display: 'flex',
    alignItems: 'center',

    [largeDown]: {
      margin: `${px(spacer(4))} 0`,
    },

    '&:hover > label': {
      isolate: 0,
      color: theme.linkInteractionColour,
    },
  },

  NelLogo: {
    width: 48,
    height: 48,
  },

  NelLogoTitle: {
    display: 'inline-block',
    width: px(100),
    wordBreak: 'break-word',
    fontSize: 17,
    lineHeight: px(16),
    color: theme.colourBrand01,
    marginLeft: spacer(4),
    paddingLeft: spacer(4),
    borderLeft: theme.solidBorder,
  },
};

export default withNEL(styles)(NelSiteLogo);
