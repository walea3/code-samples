import cx from 'classnames';
import React from 'react';

import { getDataRef } from '@nel-ui/js-helpers';

import { FieldControlLabel } from './FieldControlLabel';
import FormStyles from './FormStyles';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  /**
   * Alert status
   */
  alert?: 'warning' | 'error';
  'data-ref'?: string;
}

export const Textarea = ({
  'data-ref': dataRef,
  alert,
  className,
  label,
  ...textareaProps
}: TextareaProps) => {
  const textareaLabelId = label ? `${textareaProps.id}Label` : undefined;

  return (
    <FormStyles>
      {({ classes }) => (
        <FieldControlLabel
          className={className}
          data-ref={dataRef}
          label={label}
          htmlFor={textareaProps.id}
          id={textareaLabelId}
        >
          <textarea
            data-ref={getDataRef(dataRef, 'textarea')}
            aria-invalid={!!alert}
            {...textareaProps}
            className={cx(classes.textarea, {
              [className]: className && !label,
              [classes.disabledInput]: textareaProps.disabled,
              [classes[`${alert}Input`]]: alert,
            })}
            placeholder={null}
          />
        </FieldControlLabel>
      )}
    </FormStyles>
  );
};

Textarea.displayName = 'Textarea';
