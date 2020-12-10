import { renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { FieldControlLabel, FieldControlLabelProps } from './FieldControlLabel';

describe('@renders', () => {
  const requiredProps = {
    children: <div>element</div>,
  };

  const label: FieldControlLabelProps['label'] = 'fieldControlLabel-label';

  const accessibilityProps: Partial<FieldControlLabelProps> = {
    label: 'fieldControlLabel-test-label',
    id: 'fieldControlLabel-test-id',
    htmlFor: 'fieldControlLabel-test-htmlFor',
  };

  const renderComponent = (props) =>
    renderWithNEL(<FieldControlLabel {...requiredProps} {...props} />);

  test.each`
    name                  | props
    ${'as default'}       | ${{}}
    ${'with label'}       | ${{ ...accessibilityProps, label }}
    ${'with id'}          | ${{ ...accessibilityProps, id: 'fieldControlLabel-id' }}
    ${'with htmlFor'}     | ${{ ...accessibilityProps, htmlFor: 'fieldControlLabel-htmlFor' }}
    ${'with className'}   | ${{ label, className: 'custom-className' }}
    ${'with inline'}      | ${{ label, inline: true }}
    ${'with data-ref'}    | ${{ label, 'data-ref': 'uid' }}
    ${'with other props'} | ${{ label, 'data-custom': 'custom-value' }}
  `('$name', ({ props }) => {
    expect(renderComponent(props)).toMatchSnapshot();
  });
});
