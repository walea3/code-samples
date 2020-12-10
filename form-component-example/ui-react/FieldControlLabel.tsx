import { getDataRef } from '@nel-ui/js-helpers';
import cx from 'classnames';
import React, { ReactElement, ReactNode } from 'react';
import FormStyles from './FormStyles';

type OptionalFieldControlLabelProps =
  | {
      label: ReactNode;
      id: string;
      htmlFor: string;
    }
  | {
      label: never;
      id: never;
      htmlFor: never;
      fieldset: never;
    };

type AvailableAttr = React.AllHTMLAttributes<HTMLLabelElement | HTMLSpanElement>;
type BaseAttr = Pick<AvailableAttr, Exclude<keyof AvailableAttr, 'label'>> &
  OptionalFieldControlLabelProps;

export type FieldControlLabelProps = BaseAttr & {
  children: ReactElement;
  'data-ref'?: string;
  inline?: boolean;
};

export const FieldControlLabel = ({
  'data-ref': dataRef,
  label,
  htmlFor,
  className,
  id,
  inline = false,
  children,
  ...props
}: FieldControlLabelProps) => {
  if (!label) return children;

  return (
    <FormStyles>
      {({ classes }) => (
        <div
          data-ref={getDataRef(dataRef, 'fieldControlLabelContainer')}
          className={cx(className, classes.fieldControlLabelContainer, {
            [classes.inlineContainer]: inline,
          })}
          {...props}
        >
          <label
            data-ref={getDataRef(dataRef, 'fieldControlLabel')}
            className={classes.inputLabel}
            htmlFor={htmlFor}
            id={id}
          >
            {label}
          </label>

          {children}
        </div>
      )}
    </FormStyles>
  );
};
