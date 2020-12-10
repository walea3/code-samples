import { Checkbox, CheckRadioVariantProps, Radio, Strong } from '@nel-ui/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';

const checkRadioVariants = {
  checkbox: Checkbox,
  radio: Radio,
};

export const getProps = ({
  id,
  label,
  checked,
  disabled,
  alert,
}: Partial<CheckRadioVariantProps> = {}) => {
  const isLabelString = typeof label === 'string';

  return {
    id,
    label: isLabelString ? text(`${id}: Label`, label as string) : label,
    checked: boolean(`${id}: Checked`, checked),
    disabled: boolean(`${id}: Disabled`, disabled),
    alert: select<'warning' | 'error'>(`${id}: Alert`, [null, 'warning', 'error'], alert),
    onChange: action(`${id}: onChange`),
  };
};

const BaseExample = ({
  variant,
  id,
  selectedLabel,
  unselectedLabel,
}: {
  variant: 'checkbox' | 'radio';
  id: string;
  selectedLabel?: string;
  unselectedLabel?: string;
}) => {
  const Element = checkRadioVariants[variant];

  return (
    <>
      <Element
        {...getProps({
          id: `${variant}-${id}`,
          label: unselectedLabel ? unselectedLabel : `when ${id}`,
          alert: id,
          disabled: id === 'disabled',
        })}
        data-ref={`${id}-unchecked`}
      />
      <Element
        {...getProps({
          checked: true,
          id: `${variant}-${id}-checked`,
          label: selectedLabel ? selectedLabel : `when ${id} checked`,
          alert: id,
          disabled: id === 'disabled',
        })}
        data-ref={`${id}-checked`}
      />
    </>
  );
};

export const CheckboxExample = (props) => <BaseExample {...props} variant="checkbox" />;
export const RadioExample = (props) => <BaseExample {...props} variant="radio" />;

export const customLabelNode = (
  <span>
    A <Strong>custom</Strong> label value
  </span>
);
