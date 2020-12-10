import React from 'react';

import { action } from '@storybook/addon-actions';

import { Checkbox, CheckboxGroup } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

export default { title: 'Components/Form/Checkbox/CheckboxGroup', component: Checkbox };

export const Default = () => (
  <CheckboxGroup
    name="defaultCheckboxGroup"
    data-ref="checkboxGroup"
    onChange={action('CheckboxGroup')}
    items={[
      {
        id: 'checkboxGroup-1',
        value: 'checkbox-1',
        label: 'Checkbox 1',
      },
      {
        id: 'checkboxGroup-2',
        value: 'checkbox-2',
        label: 'Checkbox 2',
        alert: 'warning',
      },
      {
        id: 'checkboxGroup-3',
        value: 'checkbox-3',
        label: 'Checkbox 3',
        alert: 'error',
      },
      {
        id: 'checkboxGroup-4',
        value: 'checkbox-4',
        label: 'Checkbox 4',
        disabled: true,
      },
    ]}
  />
);

export const initialValue = () => (
  <Example title="Initial Value">
    <CheckboxGroup
      name="initialCheckboxGroupItem"
      data-ref="checkboxGroup"
      onChange={action('CheckboxGroup')}
      value={['checkbox-3']}
      items={[
        {
          id: 'initial-checkboxGroup-1',
          value: 'checkbox-1',
          label: 'Checkbox 1',
        },
        {
          id: 'initial-checkboxGroup-2',
          value: 'checkbox-2',
          label: 'Checkbox 2',
          alert: 'warning',
        },
        {
          id: 'initial-checkboxGroup-3',
          value: 'checkbox-3',
          label: 'Checkbox 3',
          alert: 'error',
        },
        {
          id: 'initial-checkboxGroup-4',
          value: 'checkbox-4',
          label: 'Checkbox 4',
          disabled: true,
        },
      ]}
    />
  </Example>
);

export const inline = () => (
  <>
    <Example
      title="Two options only, no breakpont vertical stacking"
      style={{ width: '75vw' }}
    >
      <CheckboxGroup
        inline
        name="inlineCheckbox"
        data-ref="inlineCheckbox"
        onChange={action('Inline CheckboxGroup')}
        items={[
          {
            id: 'inline-twoOption-checkboxGroup-1',
            value: 'option-1',
            label: 'Option 1',
          },
          {
            id: 'inline-twoOption-checkboxGroup-2',
            value: 'option-2',
            label: 'Option 2',
          },
        ]}
      />
    </Example>

    <Example title="With multiple items">
      <CheckboxGroup
        inline
        name="inlineTwoCheckboxGroup"
        data-ref="inlineTwoCheckboxGroup"
        onChange={action('Inline Two Options - CheckboxGroup')}
        items={[
          {
            id: 'inline-radioGroup-1',
            value: 'checkbox-1',
            label: 'Checkbox 1',
          },
          {
            id: 'inline-radioGroup-2',
            value: 'checkbox-2',
            label: 'Checkbox 2',
            alert: 'warning',
          },
          {
            id: 'inline-radioGroup-3',
            value: 'checkbox-3',
            label: 'Checkbox 3',
            alert: 'error',
          },
          {
            id: 'inline-radioGroup-4',
            value: 'checkbox-4',
            label: 'Checkbox 4',
            disabled: true,
          },
        ]}
      />
    </Example>
  </>
);
