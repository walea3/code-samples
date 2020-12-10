import React from 'react';

import { Radio } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

import { customLabelNode, getProps, RadioExample } from './utils/CheckboxRadioExample';

export default { title: 'Components/Form/Radio', component: Radio };

export const states = () => (
  <>
    <Example title="Individual UI states" inline>
      <RadioExample id="normal" />
      <RadioExample id="disabled" />
      <RadioExample id="warning" />
      <RadioExample id="error" />
    </Example>

    <Example title="Long label / multi-line">
      <Radio
        {...getProps({
          id: 'radio-multi-line-label',
          label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        })}
      />
    </Example>
  </>
);

export const withCustomLabel = () => (
  <Example title="allows custom label">
    <Radio
      {...getProps({
        id: 'radio-custom-label',
        label: customLabelNode,
      })}
    />
  </Example>
);
