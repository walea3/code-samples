import React from 'react';

import { UL } from '@nel-ui/react';

export interface ColourListProps {
  list?: string[];
}

const ColourList = ({ list = [] }: ColourListProps) => {
  if (list.length === 0) return null;

  return (
    <UL>
      {list.map((item, i) => (
        <UL.Item key={`item-${i}`}>{item}</UL.Item>
      ))}
    </UL>
  );
};

export default ColourList;
