import cx from 'classnames';
import React from 'react';

import { getDataRef } from '@nel-ui/js-helpers';
import { Text } from '@nel-ui/typography-react';

import FormStyles from './FormStyles';

export interface DropdownSelectableOption {
  id: string;
  value: string | number;
  text: React.ReactText;
}

export interface DropdownOptionProps {
  id: DropdownSelectableOption['id'];
  value: DropdownSelectableOption['value'];
  children: DropdownSelectableOption['text'];
  onChange: (value: DropdownOptionProps['value']) => void;
  selected?: boolean;
  active?: boolean;
  'data-ref'?: string;
}

export const DropdownOption = ({
  onChange,
  children,
  value,
  active = false,
  selected = false,
  'data-ref': dataRef,
  ...props
}: DropdownOptionProps) => (
  <FormStyles>
    {({ classes }) => (
      <Text
        as="li"
        data-ref={getDataRef(dataRef, 'dropdownOption')}
        onMouseDown={() => onChange(value)}
        className={cx(classes.dropdownOption, {
          [classes.selectedDropdownOption]: selected,
          [classes.activeDropdownOption]: active,
        })}
        role="option"
        aria-selected={active}
        {...props}
      >
        {children}
      </Text>
    )}
  </FormStyles>
);

DropdownOption.displayName = 'Dropdown.Option';
