import { Link, List } from '@nel-ui/react';
import React from 'react';

const LinkListExample = () => (
  <List id="link-example">
    <List.Item>
      <Link href="#link-example">Link list example 1</Link>
    </List.Item>
    <List.Item>
      <Link href="#link-example">Link list example 2</Link>
    </List.Item>
    <List.Item>
      <Link href="#link-example">Link list example 3</Link>
    </List.Item>
  </List>
);

export default LinkListExample;
