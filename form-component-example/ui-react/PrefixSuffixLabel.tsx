import React, { ReactNode } from 'react';

import { getDataRef } from '@nel-ui/js-helpers';
import FormStyles from './FormStyles';

type HTMLDivAttr = React.HTMLAttributes<HTMLDivElement>;

export interface PrefixSuffixLabelProps extends HTMLDivAttr {
  id: string;
  children: ReactNode;
  'data-ref'?: string;
  isSuffix?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function PrefixSuffixLabel({
  isSuffix = false,
  'data-ref': dataRef,
  ...props
}: PrefixSuffixLabelProps) {
  const suffixType = isSuffix ? 'Suffix' : 'Prefix';

  return (
    <FormStyles>
      {({ classes }) => (
        <div
          {...props}
          className={classes[`input${suffixType}`]}
          data-ref={getDataRef(dataRef, `input${suffixType}`)}
        />
      )}
    </FormStyles>
  );
}
