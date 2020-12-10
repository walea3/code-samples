import { ListProps } from '@nel-ui/list-react';
import { Grid, H4, List } from '@nel-ui/react';
import React from 'react';

export type IconType = 'do' | 'dont' | 'caution';

export interface RulesListProps {
  type: IconType;
  items: string[];
  isLarge: boolean;
  label: string;
}

const typeMap: {
  [id: string]: { listType: ListProps['variant']; defaultLabel: string };
} = {
  do: { listType: 'tick', defaultLabel: 'Do:' },
  dont: { listType: 'cross', defaultLabel: "Don't:" },
  caution: { listType: 'warning', defaultLabel: 'Caution:' },
};

const RulesList = ({ type, items, isLarge, label }: RulesListProps) => {
  const { listType, defaultLabel } = typeMap[type];
  return (
    <Grid.Column span={{ w480: isLarge ? 12 : 6 }}>
      <H4>{label || defaultLabel}</H4>
      <List variant={listType}>
        {items.map((item, i) => (
          <List.Item key={`rules-list-item-${i}`}>{item}</List.Item>
        ))}
      </List>
    </Grid.Column>
  );
};

export default RulesList;
