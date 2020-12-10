import { Field, Textarea } from '@nel-ui/react';
import React from 'react';

const TextAreaExample = ({ field, text }) => (
  <Field id="input-example" {...field}>
    {(props) => (
      <Textarea {...text} {...props}>
        {' '}
      </Textarea>
    )}
  </Field>
);

export default TextAreaExample;
