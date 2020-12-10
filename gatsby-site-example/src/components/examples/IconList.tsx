import { H4, List } from '@nel-ui/react';
import React, { Fragment } from 'react';

const IconListExample = ({ listItems }) => (
  <div style={{ maxWidth: 335 }}>
    {listItems.map(({ heading, type, items }, listIndex) => (
      <Fragment key={`icon-list-${listIndex}`}>
        <H4>{heading}</H4>
        <List variant={type}>
          {items.map((item, i) => (
            <List.Item key={`icon-list-item-${i}`}>{item}</List.Item>
          ))}
        </List>
      </Fragment>
    ))}
  </div>
);

export default IconListExample;
