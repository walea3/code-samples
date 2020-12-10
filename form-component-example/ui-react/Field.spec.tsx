import { renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { TextButton } from '@nel-ui/button-react';
import { Tooltip } from '@nel-ui/tooltip-react';
import { Field, Input, InputProps } from '.';

describe('<Field />', () => {
  describe('@renders', () => {
    const id: string = 'test-field';
    const label: string = 'Field label';
    const description: string = 'More information';
    const tooltip = <Tooltip id={`${id}-help`}>Extra helpful information.</Tooltip>;
    const children = (props: InputProps) => <Input {...props} />;
    const multiChildren = ({ id: fieldId, ...props }) => [
      <Input key={1} id={`${fieldId}-1`} {...props} />,
      <Input key={2} id={`${fieldId}-2`} {...props} />,
    ];

    const requiredProps = {
      id,
      label,
      children,
    };

    const errors = ['1 Failed', '2 Failed'];

    const actionTop = <TextButton>Top Action</TextButton>;
    const actionRight = <TextButton>Right Action</TextButton>;
    const actionLeft = <TextButton>Left Action</TextButton>;

    const allActions = {
      top: actionTop,
      right: actionRight,
      left: actionLeft,
    };

    test.each`
      name                                               | props
      ${'default'}                                       | ${{}}
      ${'with description'}                              | ${{ description }}
      ${'with tooltip'}                                  | ${{ tooltip }}
      ${'when optional'}                                 | ${{ required: false }}
      ${'when optional with custom text'}                | ${{ required: false, optionalText: '(Dewisol)' }}
      ${'with alertOptions: label'}                      | ${{ alertOptions: { label: 'Foo' }, errors }}
      ${'with alertOptions: silent'}                     | ${{ alertOptions: { silent: true }, errors }}
      ${'with alertOptions: type'}                       | ${{ alertOptions: { type: 'error' }, errors }}
      ${'with alertOptions: label & silent'}             | ${{ alertOptions: { label: 'Foo', silent: true }, errors }}
      ${'with alertOptions: silent & type'}              | ${{ alertOptions: { silent: true, type: 'error' }, errors }}
      ${'with alertOptions: label & type'}               | ${{ alertOptions: { label: 'Foo', type: 'error' }, errors }}
      ${'with alertOptions: label, silent & type'}       | ${{ alertOptions: { label: 'Foo', silent: true, type: 'error' }, errors }}
      ${'with single error'}                             | ${{ errors: 'Failed' }}
      ${'with single error as false'}                    | ${{ errors: false }}
      ${'with multiple errors'}                          | ${{ errors }}
      ${'with error and error label'}                    | ${{ errors: 'Failed', errorLabel: 'Invalid' }}
      ${'with single warning'}                           | ${{ warnings: 'Check' }}
      ${'with single warning as false'}                  | ${{ warnings: false }}
      ${'with multiple warnings'}                        | ${{ warnings: ['Check 1', 'Check 2'] }}
      ${'with warning and warning label'}                | ${{ warnings: 'Check', warningLabel: 'Careful' }}
      ${'with error and warning'}                        | ${{ warnings: 'Check', errors: 'Failed' }}
      ${'as a fieldset'}                                 | ${{ fieldset: true }}
      ${'as a fieldset with description'}                | ${{ fieldset: true, description }}
      ${'as a fieldset with inline'}                     | ${{ fieldset: true, inline: true }}
      ${'as a fieldset with rendered multiple children'} | ${{ fieldset: true, children: multiChildren }}
      ${'with className'}                                | ${{ className: 'nel-field' }}
      ${'with data-ref'}                                 | ${{ 'data-ref': 'uid' }}
      ${'with data-ref including all actions'}           | ${{ 'data-ref': 'uid', actions: allActions }}
      ${'with all actions'}                              | ${{ actions: allActions }}
      ${'with top action'}                               | ${{ actions: { top: actionTop } }}
      ${'with top action and description'}               | ${{ actions: { top: actionTop }, description }}
      ${'with right action'}                             | ${{ actions: { right: actionRight } }}
      ${'with left action'}                              | ${{ actions: { left: actionLeft } }}
      ${'with other props'}                              | ${{ id: 'uid' }}
    `('$name', ({ props }) => {
      expect(renderWithNEL(<Field {...requiredProps} {...props} />)).toMatchSnapshot();
    });
  });
});
