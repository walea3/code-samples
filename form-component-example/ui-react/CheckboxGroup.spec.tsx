import { mountWithNEL, renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React, { useEffect, useState } from 'react';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import { clickCheckbox, findCheckbox } from './CheckRadio.test-utils';

describe('<CheckboxGroup />', () => {
  const checkboxStubData = (valueIsString: boolean) =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `checkbox-test-${i}`,
      value: valueIsString ? `checkbox-test-${i}` : i,
      label: `Item ${i}`,
    }));

  const requiredProps = {
    name: 'test-name',
    items: checkboxStubData(true),
    onChange: jest.fn(),
  };

  const simulatedEventProps = {
    stopPropagation: jest.fn(),
  };

  beforeEach(jest.clearAllMocks);

  const renderComponent = (props: Partial<CheckboxGroupProps> = {}) =>
    renderWithNEL(<CheckboxGroup {...requiredProps} {...props} />);

  const mountComponent = (props: Partial<CheckboxGroupProps> = {}) =>
    mountWithNEL(<CheckboxGroup {...requiredProps} {...props} />);

  describe('@renders', () => {
    test.each`
      name                              | props
      ${'as default'}                   | ${{}}
      ${'with items value as number'}   | ${{ items: checkboxStubData(false) }}
      ${'with no items'}                | ${{ items: [] }}
      ${'with className'}               | ${{ className: 'custom-className' }}
      ${'with inline'}                  | ${{ inline: true }}
      ${'with value as single entry'}   | ${{ value: ['checkbox-test-0'] }}
      ${'with value as multiple entry'} | ${{ value: ['checkbox-test-0', 'checkbox-test-1'] }}
      ${'with data-ref'}                | ${{ 'data-ref': 'uid' }}
      ${'with other props'}             | ${{ 'data-custom': 'uid' }}
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
          clickCheckbox(wrapper, checkboxIndex, simulatedEventProps)
        );

        root.unmount();

        expect(simulatedEventProps.stopPropagation).toHaveBeenCalledTimes(
          selectOrder.length
        );
      });
    });

    describe('should call onChange()', () => {
      test.each`
        name                              | selectOrder
        ${'should select one item'}       | ${[0]}
        ${'should select multiple items'} | ${[1, 2]}
      `('$name', ({ selectOrder }) => {
        const { root, wrapper } = mountComponent();

        selectOrder.forEach((checkboxIndex) => clickCheckbox(wrapper, checkboxIndex));

        root.unmount();

        // Note - returns array with item + expected checked state
        const expectedArray = selectOrder.map((orderIndex) => ({
          ...requiredProps.items[orderIndex],
          checked: true,
        }));

        expect(requiredProps.onChange).toHaveBeenCalledTimes(selectOrder.length);
        expect(requiredProps.onChange).toHaveBeenCalledWith(
          expect.objectContaining({ type: 'change' }),
          {
            selectedItems: expectedArray,
            selectedIndexes: selectOrder,
          }
        );
      });
    });

    test('allow items checked status to be managed externally and internally', () => {
      const getCheckedItems = (labels, checkedValues) =>
        checkedValues.map((checked, i) => {
          const id = `${i}`;
          return { id, ...(labels ? { label: id } : {}), checked };
        });

      const CheckboxGroupWrapper = () => {
        const [items, setItems] = useState(getCheckedItems(true, [true, true]));
        useEffect(() => {
          // externally uncheck the second item
          setItems(getCheckedItems(true, [true, false]));
        }, []);
        return <CheckboxGroup {...requiredProps} items={items} />;
      };

      const { root } = mountWithNEL(<CheckboxGroupWrapper />);
      const checkbox = findCheckbox(root, 0);
      root.render();
      // uncheck the first item
      checkbox.simulate('change', { target: { checked: false } });

      expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
      // expect both items to be unchecked
      expect(requiredProps.onChange).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'change' }),
        {
          selectedItems: [],
          selectedIndexes: [],
        }
      );
    });
  });
});
