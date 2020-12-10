import { Field, Input } from '@nel-ui/react';
import React from 'react';

const DobExample = () => (
  <Field
    description="For example, 11 02 1989"
    id="input-day-month-year"
    label="Applicant date of birth"
    fieldset
    inline
  >
    {({ id, ...props }) => (
      <>
        <Input {...props} type="tel" id={`${id}-1`} label="Day" size={2} maxLength={2} />
        <Input
          {...props}
          type="tel"
          maxLength={2}
          id={`${id}-2`}
          label="Month"
          size={2}
        />
        <Input {...props} type="tel" maxLength={4} id={`${id}-3`} label="Year" size={4} />
      </>
    )}
  </Field>
);

export default DobExample;
