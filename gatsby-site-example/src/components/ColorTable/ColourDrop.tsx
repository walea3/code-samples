import React from 'react';

import { utils } from '@nel-ui/foundations';
import { Strong, Text, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

const { spacer } = utils;

export interface ColourDropProps extends StylingProps {
  value: string;
  title: string;
}

const ColourDrop = ({ classes, value, title }: ColourDropProps) => (
  <div className={classes.colourDrop}>
    <div
      className={classes.colourCircle}
      style={{
        background: value,
      }}
    />

    <div className={classes.colourDropDetail}>
      <Strong>{title}</Strong>
      <Text className={classes.colourDropValue}>{value}</Text>
    </div>
  </div>
);

const styles: Styles = {
  colourDrop: {
    display: 'flex',
  },

  colourCircle: {
    flex: '0 0 auto',
    marginRight: spacer(4),
    border: '1px solid #e1e1e1',
    height: 40,
    width: 40,
    borderRadius: '50%',
  },

  colourDropDetail: {},

  colourDropValue: {
    textTransform: 'uppercase',
  },
};

export default withNEL(styles)(ColourDrop);
