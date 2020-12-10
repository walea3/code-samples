import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { IconButton, IconProps, Strong, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

const { px, spacer } = utils;

type buttonAttr = React.HTMLAttributes<HTMLButtonElement>;

interface MobileHeaderActionProps extends buttonAttr, StylingProps {
  icon: IconProps['name'];
}

const styles: Styles = {
  actionButton: {},

  actionButtonIcon: {
    isolate: 0,
    margin: '0 auto',
  },

  actionButtonTitle: {
    display: 'inline-block',
    marginTop: px(spacer(1)),
    color: foundationTheme.colourBrand01,
    lineHeight: 1,
  },
};

const MobileHeaderAction = ({ classes, title, ...props }: MobileHeaderActionProps) => (
  <div className={classes.actionButton}>
    <IconButton {...props} className={classes.actionButtonIcon} />

    <Strong className={classes.actionButtonTitle}>{title}</Strong>
  </div>
);

export default withNEL(styles)(MobileHeaderAction);
