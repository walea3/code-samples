import { getDataRef } from '@nel-ui/js-helpers';
import React, { PureComponent } from 'react';

import { TextButton } from '@nel-ui/button-react';
import { Field, FieldProps, Input } from '@nel-ui/form-react';

export type PasswordProps = Pick<
  FieldProps,
  Exclude<keyof FieldProps, 'description' | 'children'>
> &
  React.HTMLAttributes<HTMLInputElement> & {
    name: string;
    showPasswordLabel?: string;
    hidePasswordLabel?: string;
    'data-ref'?: string;
  };

export interface PasswordState {
  revealPassword: boolean;
}

/*
 * @TODO: (Backlog): Move this to form pattern and write unit test
 * @description: https://trello.com/c/9e8Dn8Xf/60-151-password-pattern
 */
export default class Password extends PureComponent<PasswordProps, PasswordState> {
  static defaultProps = {
    showPasswordLabel: 'Show',
    hidePasswordLabel: 'Hide',
  };
  state = { revealPassword: false };

  toggleInputType = () => {
    this.setState(({ revealPassword }) => ({ revealPassword: !revealPassword }));
  };

  render() {
    const { revealPassword } = this.state;
    const {
      id,
      actions,
      tooltip,
      label,
      errors,
      warnings,
      showPasswordLabel,
      hidePasswordLabel,
      'data-ref': dataRef,
      ...passwordProps
    } = this.props;

    return (
      <Field
        {...{ id, label, tooltip, errors, warnings }}
        data-ref={getDataRef(dataRef)}
        actions={{
          ...actions,
          top: (
            <TextButton
              onClick={this.toggleInputType}
              data-ref={getDataRef(dataRef, 'right')}
            >
              {revealPassword ? hidePasswordLabel : showPasswordLabel}
            </TextButton>
          ),
        }}
      >
        {(fieldProps) => (
          <Input
            {...{
              ...fieldProps,
              ...passwordProps,
              id,
            }}
            data-ref={getDataRef(dataRef)}
            type={revealPassword ? 'text' : 'password'}
          />
        )}
      </Field>
    );
  }
}
