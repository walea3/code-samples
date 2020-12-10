import React, { ReactNode } from 'react';

import { getDataRef } from '@nel-ui/js-helpers';

import FormStyles from './FormStyles';

export interface FieldActionsProps {
  'data-ref': string;
  left?: ReactNode;
  right?: ReactNode;
}

export const FieldActions = ({ 'data-ref': dataRef, left, right }: FieldActionsProps) => (
  <FormStyles>
    {({ classes }) => (
      <>
        {left && (
          <div
            data-ref={getDataRef(dataRef, 'fieldActionLeft')}
            className={classes.fieldActionLeft}
          >
            {left}
          </div>
        )}

        {right && (
          <div
            data-ref={getDataRef(dataRef, 'fieldActionRight')}
            className={classes.fieldActionRight}
          >
            {right}
          </div>
        )}
      </>
    )}
  </FormStyles>
);

FieldActions.displayName = 'Field.Actions';
