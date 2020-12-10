import React from 'react';

import { renderWithNEL } from '@nel-ui/tooling-react/test-utils';

import { FormAlertMessage } from './FormAlertMessage';

describe('<FormAlertMessage />', () => {
  const requiredProps = {
    heading: 'Foo',
  };

  const renderComponent = (props) =>
    renderWithNEL(<FormAlertMessage {...requiredProps} {...props} />);

  describe('@renders', () => {
    test.each`
      name                             | props
      ${'as default'}                  | ${{}}
      ${'as inlineFirstChild'}         | ${{ inlineFirstChild: true }}
      ${'as warning'}                  | ${{ variant: 'warning' }}
      ${'as inlineFirstChild warning'} | ${{ inlineFirstChild: true, variant: 'warning' }}
    `('$name', ({ props }) => {
      expect(renderComponent(props)).toMatchSnapshot();
    });
  });
});
