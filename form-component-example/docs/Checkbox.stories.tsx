import React from 'react';

import { Checkbox } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

import { CheckboxExample, customLabelNode, getProps } from './utils/CheckboxRadioExample';

export default { title: 'Components/Form/Checkbox', component: Checkbox };

export const states = () => (
  <>
    <Example title="Individual UI states" inline>
      <CheckboxExample id="normal" />
      <CheckboxExample id="disabled" selectedLabel="when disabled and selected" />
      <CheckboxExample id="warning" />
      <CheckboxExample id="error" unselectedLabel="with error alert" />
    </Example>

    <Example title="Long label / multi-line">
      <Checkbox
        {...getProps({
          id: 'checkbox-multi-line-label',
          label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        })}
      />
    </Example>
  </>
);

export const withCustomLabel = () => (
  <Example title="allows custom label">
    <Checkbox
      {...getProps({
        id: 'checkbox-custom-label',
        label: customLabelNode,
      })}
    />
  </Example>
);
