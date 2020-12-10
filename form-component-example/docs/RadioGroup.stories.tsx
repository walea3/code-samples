import React from 'react';

import { action } from '@storybook/addon-actions';

import { Radio, RadioGroup } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

export default {
  title: 'Components/Form/Radio/RadioGroup',
  component: Radio,
};

export const Default = () => (
  <Example title="Default">
    <RadioGroup
      name="defaultRadioGroup"
      data-ref="radioGroup"
      onChange={action('RadioGroup')}
      items={[
        {
          id: 'default-radioGroup-1',
          value: 'radio-1',
          label: 'Radio 1',
        },
        {
          id: 'default-radioGroup-2',
          value: 'radio-2',
          label: 'Radio 2',
          alert: 'warning',
        },
        {
          id: 'default-radioGroup-3',
          value: 'radio-3',
          label: 'Radio 3',
          alert: 'error',
        },
        {
          id: 'default-radioGroup-4',
          value: 'radio-4',
          label: 'Radio 4',
          disabled: true,
        },
      ]}
    />
  </Example>
);

export const initialValue = () => (
  <Example title="Initial Value">
    <RadioGroup
      name="defaultRadioGroup"
      data-ref="radioGroup"
      onChange={action('RadioGroup')}
      value="radio-3"
      items={[
        {
          id: 'default-radioGroup-1',
          value: 'radio-1',
          label: 'Radio 1',
        },
        {
          id: 'default-radioGroup-2',
          value: 'radio-2',
          label: 'Radio 2',
          alert: 'warning',
        },
        {
          id: 'default-radioGroup-3',
          value: 'radio-3',
          label: 'Radio 3',
          alert: 'error',
        },
        {
          id: 'default-radioGroup-4',
          value: 'radio-4',
          label: 'Radio 4',
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
      <RadioGroup
        inline
        name="inlineRadioGroup"
        data-ref="inlineRadioGroup"
        onChange={action('Inline - RadioGroup')}
        items={[
          {
            id: 'inline-twoOption-radioGroup-1',
            value: 'yes',
            label: 'Yes',
          },
          {
            id: 'inline-twoOption-radioGroup-2',
            value: 'no',
            label: 'No',
          },
        ]}
      />
    </Example>

    <Example title="With multiple items">
      <RadioGroup
        inline
        name="inlineTwoRadioGroup"
        data-ref="inlineTwoRadioGroup"
        onChange={action('Inline Two Options - RadioGroup')}
        items={[
          {
            id: 'inline-radioGroup-1',
            value: 'radio-1',
            label: 'Radio 1',
          },
          {
            id: 'inline-radioGroup-2',
            value: 'radio-2',
            label: 'Radio 2',
            alert: 'warning',
          },
          {
            id: 'inline-radioGroup-3',
            value: 'radio-3',
            label: 'Radio 3',
            alert: 'error',
          },
          {
            id: 'inline-radioGroup-4',
            value: 'radio-4',
            label: 'Radio 4',
            disabled: true,
          },
        ]}
      />
    </Example>
  </>
);
