import { renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { CheckRadioIcon, IconPaths } from './CheckRadioIcon';

describe('<CheckRadioIcon />', () => {
  const renderComponent = (props) => renderWithNEL(<CheckRadioIcon {...props} />);

  describe('@renders', () => {
    test.each`
      name             | props
      ${'as radio'}    | ${{ variant: 'radio' }}
      ${'as checkbox'} | ${{ variant: 'checkbox' }}
    `('variant $name', ({ props }) => {
      expect(renderComponent(props)).toMatchSnapshot();
    });

    test('available CheckIcon variants', () => {
      expect(IconPaths).toMatchSnapshot();
    });
  });
});
