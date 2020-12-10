import cx from 'classnames';
import React from 'react';

import { getDataRef } from '@nel-ui/js-helpers';
import { Heading, Text } from '@nel-ui/typography-react';

import FormStyles from './FormStyles';

export interface FieldLabelProps
  extends React.AllHTMLAttributes<HTMLLabelElement | HTMLSpanElement> {
  children: React.ReactNode;
  id: string;
  'data-ref'?: string;
  fieldset?: boolean;
  required?: boolean;
  tooltip?: React.ReactElement;
  optionalText?: string;
  withAction?: boolean;
}

export const FieldLabel = ({
  children,
  className,
  'data-ref': dataRef,
  required,
  fieldset,
  tooltip,
  optionalText,
  withAction,
  ...labelProps
}: FieldLabelProps) => {
  const headingElement = fieldset ? 'span' : 'label';
  const baseRef = getDataRef(dataRef, 'fieldLabel');

  return (
    <FormStyles>
      {({ classes }) => (
        <div
          data-ref={baseRef}
          className={cx(
            {
              [classes.fieldLabelWithAction]: withAction,
            },
            classes.fieldLabelContainer
          )}
        >
          <Heading
            level={4}
            as={headingElement}
            data-ref={baseRef}
            className={cx(className, classes.fieldLabel)}
            {...labelProps}
          >
            <>
              {children}

              {!required && (
                <>
                  {' '}
                  <Text inline>{optionalText}</Text>
                </>
              )}
            </>
          </Heading>
          {tooltip}
        </div>
      )}
    </FormStyles>
  );
};

FieldLabel.displayName = 'Field.Label';
