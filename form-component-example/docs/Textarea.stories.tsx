import React from 'react';

import { Textarea } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: { nel: { col: { md: 8 } } },
};

export const states = () => (
  <Example title="in states">
    <Textarea
      id="textarea-normal"
      cols={75}
      defaultValue="when normal"
      data-ref="normal"
    />

    <Textarea
      id="textarea-disabled"
      cols={75}
      defaultValue="when disabled"
      disabled
      data-ref="disabled"
    />

    <Textarea
      id="textarea-warning"
      cols={75}
      defaultValue="with warning alert"
      alert="warning"
      data-ref="warning"
    />

    <Textarea
      id="textarea-error"
      cols={75}
      defaultValue="with error alert"
      alert="error"
      data-ref="error"
    />
  </Example>
);

export const labelled = () => (
  <Example title="with label">
    <Textarea
      id="textarea-label"
      label="Input"
      cols={75}
      defaultValue="when normal"
      data-ref="normal"
    />
  </Example>
);
