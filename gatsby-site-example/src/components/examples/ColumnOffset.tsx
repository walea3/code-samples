import { theme } from '@nel-ui/foundations';
import { Button, Grid } from '@nel-ui/react';
import React from 'react';

const blockStyle = {
  width: '100%',
  backgroundColor: theme.colourInteractionPrimary,
  borderRadius: '4px',
  padding: 0,
};

const ColumnOffsetExample = () => (
  <Grid>
    <Grid.Column offset={11}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={10}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={9}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={8}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={7}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={6}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={5}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={4}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={3}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={2}>
      <Button style={blockStyle} />
    </Grid.Column>
    <Grid.Column offset={1}>
      <Button style={blockStyle} />
    </Grid.Column>
  </Grid>
);

export default ColumnOffsetExample;
