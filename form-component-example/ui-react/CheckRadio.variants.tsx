import React from 'react';
import { CheckRadio, CheckRadioProps } from './';

export type CheckRadioVariantProps = Pick<
  CheckRadioProps,
  Exclude<keyof CheckRadioProps, 'variant'>
>;

export type CheckboxProps = CheckRadioVariantProps;
export type RadioProps = CheckRadioVariantProps;

export function Checkbox(props: CheckboxProps) {
  return <CheckRadio {...props} variant="checkbox" />;
}

export function Radio(props: RadioProps) {
  return <CheckRadio {...props} variant="radio" />;
}
