import { Checkbox, Field } from '@nel-ui/react';
import React from 'react';

const CheckboxExample = ({ field, options }) => (
  <Field {...field}>
    {(props) =>
      options.map((check, i) => <Checkbox key={i} name="options" {...props} {...check} />)
    }
  </Field>
);

export default CheckboxExample;
