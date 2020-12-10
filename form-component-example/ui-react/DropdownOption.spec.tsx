import { mountWithNEL, renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { DropdownOption } from './DropdownOption';

describe('<DropdownOption />', () => {
  const defaultProps = {
    id: 'option-1',
    value: 'option value',
    children: 'Dropdown option',
  };

  describe('@renders', () => {
    test.each`
      name                  | props
      ${'default'}          | ${{}}
      ${'when selected'}    | ${{ selected: true }}
      ${'when active'}      | ${{ active: true }}
      ${'with data-ref'}    | ${{ 'data-ref': 'uid' }}
      ${'with other props'} | ${{ id: 'test' }}
    `('$name', ({ props }) =>
      expect(
        renderWithNEL(<DropdownOption {...defaultProps} {...props} />)
      ).toMatchSnapshot()
    );
  });

  describe('@events', () => {
    const onChange = jest.fn();

    test('on mouse down calls on change handler with option value', () => {
      const { root, wrapper } = mountWithNEL(
        <DropdownOption {...defaultProps} {...{ onChange }} />
      );

      wrapper
        .find('[role="option"]')
        .first()
        .simulate('mouseDown');

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(defaultProps.value);

      root.unmount();
    });
  });
});
