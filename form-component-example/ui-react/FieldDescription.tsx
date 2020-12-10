import cx from 'classnames';
import React from 'react';

import { getDataRef } from '@nel-ui/js-helpers';
import { Small } from '@nel-ui/typography-react';

import FormStyles from './FormStyles';

export interface FieldDescriptionProps
  extends React.LabelHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  'data-ref'?: string;
}

export const FieldDescription = ({
  children,
  className,
  'data-ref': dataRef,
  ...props
}: FieldDescriptionProps) => (
  <FormStyles>
    {({ classes }) => (
      <Small
        data-ref={getDataRef(dataRef, 'fieldDescription')}
        className={cx(className, classes.fieldDescription)}
        {...props}
      >
        {children}
      </Small>
    )}
  </FormStyles>
);

FieldDescription.displayName = 'Field.Description';
