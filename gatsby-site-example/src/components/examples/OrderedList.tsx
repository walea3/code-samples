import { OL } from '@nel-ui/react';
import React from 'react';

const OrderedListExample = () => (
  <OL>
    <OL.Item>
      Ordered list item
      <OL>
        <OL.Item>lowercase letters</OL.Item>
        <OL.Item>lowercase letters</OL.Item>
        <OL.Item>
          lowercase letters
          <OL>
            <OL.Item>roman numbers</OL.Item>
            <OL.Item>roman numbers</OL.Item>
            <OL.Item>roman numbers</OL.Item>
          </OL>
        </OL.Item>
      </OL>
    </OL.Item>
  </OL>
);

export default OrderedListExample;
