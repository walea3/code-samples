import { Accordion, Grid, P } from '@nel-ui/react';
import React from 'react';
import { dummyData } from '../../../../../2.ui-components/accordion/docs/Accordion.data';

const AccordionExample = () => (
  <Grid.Col>
    <Accordion
      items={dummyData(
        'Accordion',
        <P>
          If you have a Noop current account and you're registered for our Internet
          Bank, you can close your Noop cash ISA and move the money into your
          currrent account by using the closure form in our Internet Bank.
        </P>
      )}
    />
  </Grid.Col>
);

export default AccordionExample;
