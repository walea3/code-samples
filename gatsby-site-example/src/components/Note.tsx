import { Icon, Strong, Text, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import React from 'react';

const { proximity } = utils;

interface NoteProps extends StylingProps {
  heading: string;
  text: string;
}

const Note = ({ classes, ...props }: NoteProps) => (
  <Text className={classes.wrapper}>
    <Icon name="info-24-warning" className={classes.icon} />
    <Strong>{props.heading}</Strong>
    {props.text}
  </Text>
);

const noteTheme = {
  noteProximity: 4,
  noteIconSpacing: 2,
};

const theme = {
  ...foundationTheme,
  ...noteTheme,
};

const styles: Styles = {
  wrapper: proximity(theme.noteProximity),
  icon: {
    marginRight: utils.spacer(theme.noteIconSpacing),
  },
};

export default withNEL(styles)(Note);
