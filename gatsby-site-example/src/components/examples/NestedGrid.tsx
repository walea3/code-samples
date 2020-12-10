import { theme } from '@nel-ui/foundations';
import { Button, Grid } from '@nel-ui/react';
import React from 'react';

const columnStyle = {
  width: '100%',
  backgroundColor: theme.colourInteractionPrimary,
  borderRadius: '4px',
};

const NestedGridExample = () => (
  <Grid data-ref="responsive.nested">
    <Grid.Col span={{ sm: 12, md: 3 }}>
      <Button style={columnStyle} />
      <Button style={columnStyle} />
      <Button style={columnStyle} />
    </Grid.Col>
    <Grid.Col span={{ sm: 12, md: 9 }}>
      <Grid data-ref="responsive.nested.child.grid">
        <Grid.Col span={6}>
          <Button style={columnStyle} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Button style={columnStyle} />
        </Grid.Col>
        <Grid.Col span={3}>
          <Button style={columnStyle} />
        </Grid.Col>
        <Grid.Col span={9}>
          <Button style={columnStyle} />
        </Grid.Col>
        <Grid.Col span={9}>
          <Button style={columnStyle} />
        </Grid.Col>
        <Grid.Col span={3}>
          <Button style={columnStyle} />
        </Grid.Col>
      </Grid>
    </Grid.Col>
    <Grid.Col span={{ sm: 12, md: 6 }}>
      <Button style={columnStyle} />
    </Grid.Col>
    <Grid.Col span={{ sm: 12, md: 6 }}>
      <Button style={columnStyle} />
    </Grid.Col>
  </Grid>
);

export default NestedGridExample;
