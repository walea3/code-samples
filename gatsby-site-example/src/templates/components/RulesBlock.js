import React from 'react';
import { Grid } from '@nel-ui/react';
import Rule from '../../components/Rule';

const RulesBlock = ({ rules }) => (
  <Grid>
    {rules.map((rule, i) => (
      <Rule
        key={`rule-rule-${i}`}
        isLarge={rule.isLarge}
        type={rule.type}
        label={rule.label}
        description={rule.description}
        image={{ src: rule.image }}
      />
    ))}
  </Grid>
);

export default RulesBlock;
