import { theme } from '@nel-ui/foundations';
import { Button, Grid } from '@nel-ui/react';
import React from 'react';

const blockStyle = {
  width: '100%',
  backgroundColor: theme.colourInteractionPrimary,
  borderRadius: '4px',
};

const ResponsiveGridExample = () => (
  <Grid>
    <Grid.Column span={3}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={6}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={3}>
      <Button style={blockStyle} />
    </Grid.Column>

    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>

    <Grid.Column span={6}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={6}>
      <Button style={blockStyle} />
    </Grid.Column>

    <Grid.Column span={6}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={6}>
      <Button style={blockStyle} />
    </Grid.Column>

    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>

    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column span={4}>
      <Button style={blockStyle} />
    </Grid.Column>
  </Grid>
);

export default ResponsiveGridExample;
