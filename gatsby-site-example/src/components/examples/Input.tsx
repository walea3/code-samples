import { noop } from '@nel-ui/js-helpers';
import { Field, Input } from '@nel-ui/react';
import React from 'react';

const InputExample = ({ field, input }) => (
  <Field id="input-example" {...field}>
    {(props) => <Input onChange={noop} {...props} {...input} />}
  </Field>
);

export default InputExample;
