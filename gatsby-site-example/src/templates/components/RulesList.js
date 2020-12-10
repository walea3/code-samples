import React from 'react';
import { Grid } from '@nel-ui/react';
import NELRulesList from '../../components/RulesList';

const RulesList = ({ lists }) => (
  <Grid>
    {lists.map((list, i) => (
      <NELRulesList
        key={`rules-list-${i}`}
        type={list.icon}
        items={list.items}
        isLarge={false}
        label={list.title}
      />
    ))}
  </Grid>
);

export default RulesList;
