import { mountWithNEL, renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { ReactWrapper } from 'enzyme';
import { Input } from '.';

export const findDataRef = (node: ReactWrapper, targetRef: string): ReactWrapper =>
  node.find(`[data-ref="${targetRef}"]`);

describe('<Input />', () => {
  const requiredProps = {
    id: 'inputId',
  };

  const prefix = 'prefix';
  const suffix = 'suffix';

  const mountComponent = (props) => mountWithNEL(<Input {...requiredProps} {...props} />);

  const renderComponent = (props) =>
    renderWithNEL(<Input {...requiredProps} {...props} />);

  describe('@renders', () => {
    test.each`
      name                                              | props
      ${'default'}                                      | ${{}}
      ${'as inline'}                                    | ${{ inline: true }}
      ${'when disabled'}                                | ${{ disabled: true }}
      ${'with size'}                                    | ${{ size: 5 }}
      ${'with minimum size'}                            | ${{ size: 2 }}
      ${'with below minimum size'}                      | ${{ size: 1 }}
      ${'with size with style'}                         | ${{ size: 1, style: { opacity: 0.5 } }}
      ${'with style'}                                   | ${{ style: { opacity: 0.5 } }}
      ${'with class name'}                              | ${{ className: 'test-input' }}
      ${'with warning label'}                           | ${{ label: 'Input label' }}
      ${'with warning label + className'}               | ${{ label: 'Input label', className: 'custom-input-labelContainer' }}
      ${'with warning label + as inline'}               | ${{ label: 'Input label', inline: true }}
      ${'with warning alert'}                           | ${{ alert: 'warning' }}
      ${'when disabled + with warning alert'}           | ${{ disabled: true, alert: 'warning' }}
      ${'with error alert'}                             | ${{ alert: 'error' }}
      ${'when disabled + with error alert'}             | ${{ disabled: true, alert: 'error' }}
      ${'with prefix'}                                  | ${{ prefix }}
      ${'with suffix'}                                  | ${{ suffix }}
      ${'with prefix & suffix'}                         | ${{ prefix, suffix }}
      ${'with data-ref'}                                | ${{ 'data-ref': 'uid' }}
      ${'with data-ref with label'}                     | ${{ 'data-ref': 'uid', label: 'I am a test :)' }}
      ${'with data-ref with prefix & suffix'}           | ${{ 'data-ref': 'uid', prefix, suffix }}
      ${'with aria-labelledby, label, prefix & suffix'} | ${{ 'aria-labelledby': 'extraInputLabel', label: 'I am a test :)', prefix, suffix }}
      ${'with other props'}                             | ${{ 'data-custom': 'uid' }}
    `('$name', ({ props }) => {
      expect(renderComponent(props)).toMatchSnapshot();
    });

    describe('when focussed', () => {
      test.each`
        name                        | dataRef          | focusEvent | props
        ${'by focussing on input'}  | ${'input'}       | ${'focus'} | ${{}}
        ${'by focussing on prefix'} | ${'inputPrefix'} | ${'focus'} | ${{ prefix }}
        ${'by focussing on suffix'} | ${'inputSuffix'} | ${'focus'} | ${{ suffix }}
      `('$name', ({ dataRef, focusEvent, props }) => {
        const { root, wrapper } = mountComponent(props);
        const el = findDataRef(wrapper, dataRef);

        el.simulate(focusEvent);
        expect(wrapper.render()).toMatchSnapshot();

        el.simulate('blur');
        expect(wrapper.render()).toMatchSnapshot('then blurred');

        root.unmount();
      });
    });

    describe('focusses input', () => {
      test.each`
        name                       | dataRef          | focusEvent | props
        ${'by clicking on prefix'} | ${'inputPrefix'} | ${'click'} | ${{ prefix }}
        ${'by clicking on suffix'} | ${'inputSuffix'} | ${'click'} | ${{ suffix }}
      `('$name', ({ dataRef, focusEvent, props }) => {
        const { root, wrapper } = mountComponent(props);
        const el = findDataRef(wrapper, dataRef);

        el.simulate(focusEvent);
        expect(wrapper.render()).toMatchSnapshot();

        root.unmount();
      });
    });
  });

  describe('@ref', () => {
    test('current is assigned input node', () => {
      const myRef = React.createRef<HTMLInputElement>();

      const { root, wrapper } = mountComponent({ id: 'ref', ref: myRef });
      expect(myRef.current).toEqual(wrapper.find('input').getDOMNode());
      root.unmount();
    });

    test('called with input node', () => {
      const myRef = jest.fn();

      const { root, wrapper } = mountComponent({ ref: myRef });
      expect(myRef).toHaveBeenCalledWith(findDataRef(wrapper, 'input').getDOMNode());
      root.unmount();
    });
  });

  describe('@events', () => {
    test.each`
      name                     | dataRef          | event      | handler
      ${'focussing on input'}  | ${'input'}       | ${'focus'} | ${'onFocus'}
      ${'focussing on prefix'} | ${'inputPrefix'} | ${'focus'} | ${'onFocus'}
      ${'focussing on suffix'} | ${'inputSuffix'} | ${'focus'} | ${'onFocus'}
      ${'blurring input'}      | ${'input'}       | ${'blur'}  | ${'onBlur'}
      ${'blurring prefix'}     | ${'inputPrefix'} | ${'blur'}  | ${'onBlur'}
      ${'blurring suffix'}     | ${'inputSuffix'} | ${'blur'}  | ${'onBlur'}
    `('$name calls event handler', ({ dataRef, event, handler }) => {
      const expectedEvent = {
        // Note: This will return onFocus/onBlur
        [handler]: jest.fn(),
      };

      const { root, wrapper } = mountComponent({
        ...expectedEvent,
        id: 'prefixSuffixEvents',
        prefix,
        suffix,
      });

      findDataRef(wrapper, dataRef).simulate(event);
      expect(expectedEvent[handler]).toHaveBeenCalledTimes(1);
      expect(expectedEvent[handler]).toHaveBeenCalledWith(
        expect.objectContaining({ type: event })
      );

      root.unmount();
    });
  });
});
