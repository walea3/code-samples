import React, { HTMLAttributes } from 'react';

import _capitalize from 'lodash.capitalize';
import _lowerCase from 'lodash.lowercase';

import { utils } from '@nel-ui/foundations';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import {
  Grid,
  Icon,
  IconButton,
  IconProps,
  Small,
  utils as iconUtils,
  withNEL,
} from '@nel-ui/react';

const iconSetMap = {
  'action-24': ['tooltip'],
  'action-40': [
    'thumb-up',
    'thumb-down',
    'minus',
    'plus',
    'chevron-left',
    'chevron-right',
    'menu',
    'sort',
    'download',
    'share',
    'lock',
    'camera',
    'phone',
    'chat',
    'mail',
    'pin',
  ],
  'info-24': ['success', 'error', 'stop', 'warning', 'info', 'tip'],
  'info-40': ['success'],
  static: [
    'apple-watch',
    'audio',
    'cashpoint',
    'clock',
    'cross',
    'desktop',
    'disabled',
    'download',
    'email',
    'ipad',
    'online',
    'phone',
    'post',
    'self-service',
    'smart-watch',
    'tick',
    'timer',
    'transfer',
    'wheelchair',
  ],
  sys: [
    'left',
    'right',
    'up',
    'down',
    'plus',
    'minus',
    'close',
    'search',
    'cog',
    'new-window',
  ],
};

export interface IconSetProps extends HTMLAttributes<HTMLDivElement>, StylingProps {
  name?: IconProps['name'];
  iconSet?: Array<{ name: IconProps['name']; button: boolean }>;
  button?: boolean;
}

const IconSet = ({ classes, name: setName, iconSet, button }: IconSetProps) => (
  <Grid>
    {(iconSet || iconSetMap[setName]).map((icon) => {
      const { name, button: isButton } = iconSet
        ? icon
        : { name: `${setName}-${icon}`, button };
      const iconProps = { name, 'data-ref': name };
      const title = _capitalize(_lowerCase(iconUtils.getIconInfo(name).iconKey));

      return (
        <Grid.Col key={name} className={classes.iconContainer}>
          {isButton ? (
            <IconButton
              data-ref={name}
              title={title}
              icon={iconProps}
              className={classes.icon}
            />
          ) : (
            <Icon {...iconProps} className={classes.icon} />
          )}

          <Small>{title}</Small>
        </Grid.Col>
      );
    })}
  </Grid>
);

const { proximity, mergeStyles, calcGridColumnWidth, mq } = utils;

// @TODO grid should support sizing nested grid based on total grid size
// total grid columns / nested grid width = nested grid column width
const columnWidth = 12 / 8;
const iconColWidth = calcGridColumnWidth(columnWidth * 2);
const iconColWidthMd = calcGridColumnWidth(columnWidth);

const styles: Styles = {
  iconContainer: mergeStyles(proximity(6, 'padding', 'vertical'), {
    flexBasis: iconColWidth,
    maxWidth: iconColWidth,

    '&, & > *': { isolate: 0, textAlign: 'center' },

    [mq.breakpoint600]: {
      flexBasis: iconColWidthMd,
      maxWidth: iconColWidthMd,
    },
  }),
  icon: {
    margin: '0 auto',
  },
};

export default withNEL(styles)(IconSet);
