import { noop } from '@nel-ui/js-helpers';
import { Dropdown, Field } from '@nel-ui/react';
import React from 'react';

const DropdownExample = ({ field, dropdown: { items, alert, ...dropdown } }) => (
  <Field {...field}>
    {(props) => (
      <Dropdown
        placeholder="Select"
        options={items.map((value, i) => ({ id: i, value, text: value }))}
        onChange={noop}
        {...dropdown}
        {...props}
        {...{ alert }}
      />
    )}
  </Field>
);

export default DropdownExample;
