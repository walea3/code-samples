import { renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { Textarea } from '.';

describe('<Textarea />', () => {
  const requiredProps = {
    id: 'textarea-id',
  };

  describe('@renders', () => {
    test.each`
      name                                    | props
      ${'default'}                            | ${{}}
      ${'with className'}                     | ${{ className: 'test-textarea' }}
      ${'with label'}                         | ${{ label: 'Textarea label' }}
      ${'when disabled'}                      | ${{ disabled: true }}
      ${'when disabled + with warning alert'} | ${{ disabled: true, alert: 'warning' }}
      ${'when disabled + with error alert'}   | ${{ disabled: true, alert: 'error' }}
      ${'with warning alert'}                 | ${{ alert: 'warning' }}
      ${'with error alert'}                   | ${{ alert: 'error' }}
      ${'with data-ref'}                      | ${{ 'data-ref': 'uid' }}
      ${'with data-ref + label'}              | ${{ 'data-ref': 'uid', label: 'Textarea label' }}
      ${'with other props'}                   | ${{ 'data-custom': 'custom-value' }}
    `('$name', ({ props }) =>
      expect(renderWithNEL(<Textarea {...requiredProps} {...props} />)).toMatchSnapshot()
    );
  });
});
