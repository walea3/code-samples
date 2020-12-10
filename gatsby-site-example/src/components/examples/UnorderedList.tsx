import { UL } from '@nel-ui/react';
import React from 'react';

const UnorderedListExample = () => (
  <UL>
    <UL.Item>
      Unordered list item
      <UL>
        <UL.Item>Unordered nested list item</UL.Item>
        <UL.Item>Unordered nested list item</UL.Item>
        <UL.Item>
          Unordered nested list item
          <UL>
            <UL.Item>Unordered nested list item</UL.Item>
            <UL.Item>Unordered nested list item</UL.Item>
            <UL.Item>Unordered nested list item</UL.Item>
          </UL>
        </UL.Item>
      </UL>
    </UL.Item>
  </UL>
);

export default UnorderedListExample;
