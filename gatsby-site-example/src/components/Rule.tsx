import React from 'react';

import { theme, utils } from '@nel-ui/foundations';
import { IconProps } from '@nel-ui/icon-react';
import { Grid, Icon, Strong, Text, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const { mergeStyles, clearProximity, proximity, px } = utils;

export type RuleType = 'do' | 'dont' | 'consider' | 'caution';

export interface RulesBlockProps extends StylingProps {
  type: RuleType;
  description: string;
  label: string;
  image: string | object;
  isLarge: boolean;
}

const typeMap: { [id: string]: { iconName: IconProps['name']; defaultLabel: string } } = {
  do: {
    iconName: 'info-24-success',
    defaultLabel: 'Do:',
  },
  dont: {
    iconName: 'info-24-stop',
    defaultLabel: "Don't:",
  },
  caution: {
    iconName: 'info-24-warning',
    defaultLabel: 'Consider:',
  },
  consider: {
    iconName: 'info-24-warning',
    defaultLabel: 'Consider:',
  },
};

const Rule = ({ type, description, label, image, isLarge, classes }: RulesBlockProps) => {
  const { iconName, defaultLabel } = typeMap[type];

  return (
    <Grid.Column span={{ w600: isLarge ? 12 : 6 }}>
      <div className={classes[`${type}RuleImageContainer`]}>
        <PreviewCompatibleImage className={classes.ruleImage} imageInfo={{ image }} />
      </div>

      <div className={classes.container}>
        <Icon className={classes.iconSize} name={iconName} />

        <Text className={classes.description}>
          <Strong className={classes.label}>{label || defaultLabel} </Strong>{' '}
          {description}
        </Text>
      </div>
    </Grid.Column>
  );
};

export const styles: Styles = {
  ruleImage: {
    isolate: 0,
    verticalAlign: 'top',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    border: '1px solid #D8D8D8',
    borderLeft: '0',
    width: '100%',
  },
  ruleImageContainer: mergeStyles(proximity(6), {
    borderLeftStyle: 'solid',
    borderLeftWidth: '4px',
    width: '100%',
  }),
  considerRuleImageContainer: {
    extend: 'cautionRuleImageContainer',
  },
  cautionRuleImageContainer: {
    composes: '$ruleImageContainer',
    borderLeftColor: theme.colourInteractionWarning100,
  },
  doRuleImageContainer: {
    composes: '$ruleImageContainer',
    borderLeftColor: theme.colourInteractionSuccess100,
  },
  dontRuleImageContainer: {
    composes: '$ruleImageContainer',
    borderLeftColor: theme.colourInteractionError100,
  },
  iconSize: {
    position: 'relative',
    top: 2,
    width: '24px',
    height: '24px',
  },
  description: {
    marginLeft: px(12),
  },
  container: {
    marginTop: px(8),
    display: 'flex',
  },
  label: {
    '& + *': mergeStyles(clearProximity(), {
      isolate: 0,
      display: 'inline',
    }),
  },
};

export default withNEL(styles)(Rule);
