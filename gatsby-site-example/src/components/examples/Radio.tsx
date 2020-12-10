import { Field, Radio } from '@nel-ui/react';
import React, { useState } from 'react';

const RadioExample = ({ field, options }) => {
  const [checked, setChecked] = useState(null);

  return (
    <Field {...field} fieldset>
      {(props) =>
        options.map((radio, i) => (
          <Radio
            key={i}
            checked={checked === radio.id}
            onChange={() => setChecked(radio.id)}
            {...props}
            {...radio}
          />
        ))
      }
    </Field>
  );
};

export default RadioExample;
