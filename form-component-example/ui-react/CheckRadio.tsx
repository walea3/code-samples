import cx from 'classnames';
import React, { ReactNode } from 'react';

import { getDataRef } from '@nel-ui/js-helpers';
import { CheckRadioIcon } from './CheckRadioIcon';
import FormStyles from './FormStyles';

// TODO: Remove inline here when support is added
export type CheckRadioSingular = Omit<CheckRadioProps, 'inline' | 'variant'>;

export interface CheckRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  variant: 'checkbox' | 'radio';
  alert?: 'warning' | 'error';
  inline?: boolean;
  disabled?: boolean;
  'data-ref'?: string;
}

export function CheckRadio({
  'data-ref': dataRef,
  variant,
  label,
  alert,
  inline,
  className,
  ...props
}: CheckRadioProps) {
  return (
    <FormStyles>
      {({ classes }) => (
        <div
          className={cx(classes.checkRadioContainer, {
            [classes.inlineCheckRadio]: inline,
          })}
          data-ref={getDataRef(dataRef, `${variant}Container`)}
        >
          <input
            data-ref={getDataRef(dataRef, `${variant}Input`)}
            type={variant}
            className={classes.checkRadioInput}
            aria-invalid={!!alert}
            {...props}
          />

          <label
            data-ref={getDataRef(dataRef, variant)}
            htmlFor={props.id}
            className={cx(className, classes.checkRadio, classes[variant], {
              [classes[`${alert}CheckRadio`]]: alert,
            })}
          >
            <span
              data-ref={getDataRef(dataRef, `${variant}Control`)}
              className={classes.checkRadioControl}
            >
              <CheckRadioIcon variant={variant} />
            </span>
            {label}
          </label>
        </div>
      )}
    </FormStyles>
  );
}
