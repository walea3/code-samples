import { mountWithNEL, renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { clickRadio } from './CheckRadio.test-utils';
import { RadioGroup, RadioGroupProps } from './RadioGroup';

describe('<RadioGroup />', () => {
  const radioStubData = (valueIsString: boolean) =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `radio-test-${i}`,
      value: valueIsString ? `radio-test-${i}` : i,
      label: `Item ${i}`,
    }));

  const requiredProps: RadioGroupProps = {
    name: 'test-list',
    items: radioStubData(true),
    onChange: jest.fn(),
  };

  const simulatedEventProps = {
    stopPropagation: jest.fn(),
  };

  beforeEach(jest.clearAllMocks);

  const renderComponent = (props: Partial<RadioGroupProps> = {}) =>
    renderWithNEL(<RadioGroup {...requiredProps} {...props} />);
  const mountComponent = (props: Partial<RadioGroupProps> = {}) =>
    mountWithNEL(<RadioGroup {...requiredProps} {...props} />);

  describe('@renders', () => {
    test.each`
      name                            | props
      ${'as default'}                 | ${{}}
      ${'with items value as number'} | ${{ items: radioStubData(false) }}
      ${'with no items'}              | ${{ items: [] }}
      ${'with inline'}                | ${{ inline: true }}
      ${'with className'}             | ${{ className: 'custom-className' }}
      ${'with value'}                 | ${{ value: 'radio-test-0' }}
      ${'with data-ref'}              | ${{ 'data-ref': 'uid' }}
      ${'with other props'}           | ${{ 'data-custom': 'uid' }}
    `('$name', ({ props }) => {
      expect(renderComponent(props)).toMatchSnapshot();
    });
  });

  describe('@events', () => {
    beforeEach(() => {
      expect(requiredProps.onChange).toHaveBeenCalledTimes(0);
    });

    describe('should stopPropagation on event', () => {
      beforeEach(() => {
        expect(simulatedEventProps.stopPropagation).toHaveBeenCalledTimes(0);
      });

      test.each`
        name                | selectOrder
        ${'single item'}    | ${[0]}
        ${'multiple items'} | ${[1, 2]}
      `('$name', ({ selectOrder }) => {
        const { root, wrapper } = mountComponent();

        selectOrder.forEach((checkboxIndex) =>
          clickRadio(wrapper, checkboxIndex, simulatedEventProps)
        );

        root.unmount();

        expect(simulatedEventProps.stopPropagation).toHaveBeenCalledTimes(
          selectOrder.length
        );
      });
    });

    describe('calls onChange()', () => {
      test.each`
        name                                                    | selectOrder
        ${'should select first item when none are preselected'} | ${[0]}
        ${'should return an updated radio selection'}           | ${[0, 2]}
      `('$name', ({ selectOrder }) => {
        const { root, wrapper } = mountComponent();

        const selectedIndex = selectOrder[selectOrder.length - 1];

        selectOrder.forEach((radioIndex) => clickRadio(wrapper, radioIndex));

        expect(requiredProps.onChange).toHaveBeenCalledTimes(selectOrder.length);
        expect(requiredProps.onChange).toHaveBeenCalledWith(
          expect.objectContaining({ type: 'change' }),
          {
            selectedItem: requiredProps.items[selectedIndex],
            selectedIndex,
          }
        );

        root.unmount();
      });
    });
  });
});
