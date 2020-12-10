import React, { createRef, useEffect, useState } from 'react';

import { keyCodes } from '@nel-ui/js-helpers';
import { mountWithNEL, renderWithNEL } from '@nel-ui/tooling-react/test-utils';

import { Dropdown } from './Dropdown';
import { findNextIndex } from './utils';

describe('<Dropdown />', () => {
  jest.useFakeTimers();

  const options = [
    {
      id: '0',
      value: 'item 1',
      text: 'item 1',
    },
    {
      id: '1',
      value: 'item 2',
      text: 'item 2',
    },
    {
      id: '2',
      value: 'item 3',
      text: 'item 3',
    },
  ];

  const lastOptionIndex: number = options.length - 1;

  let optionsRect;
  let optionRect;

  const requiredProps = { options, onChange: jest.fn() };

  beforeEach(() => {
    optionsRect = { top: 0, bottom: 0, left: 0, right: 0, height: 100, width: 100 };
    optionRect = { top: 0, bottom: 0, left: 0, right: 0, height: 40, width: 100 };
    jest.clearAllMocks();
  });

  describe('@renders', () => {
    test.each`
      name                                        | props
      ${'default'}                                | ${{}}
      ${'when disabled'}                          | ${{ disabled: true }}
      ${'with label'}                             | ${{ label: 'Please select' }}
      ${'with label + className'}                 | ${{ label: 'Input label', className: 'custom-dropdown-labelContainer' }}
      ${'with class name'}                        | ${{ className: 'test-input' }}
      ${'with warning alert'}                     | ${{ alert: 'warning' }}
      ${'with error alert'}                       | ${{ alert: 'error' }}
      ${'with placeholder'}                       | ${{ placeholder: 'Please select' }}
      ${'with default selected option'}           | ${{ value: options[lastOptionIndex].value, placeholder: 'Please select' }}
      ${'with data-ref'}                          | ${{ 'data-ref': 'uid' }}
      ${'with data-label-id'}                     | ${{ 'data-label-id': 'label' }}
      ${'with aria-labelledby'}                   | ${{ 'aria-labelledby': 'test' }}
      ${'with data-label-id and aria-labelledby'} | ${{ 'data-label-id': 'label', 'aria-labelledby': 'test' }}
      ${'with aria-required'}                     | ${{ 'aria-required': true }}
      ${'with other props'}                       | ${{ id: 'test' }}
    `('$name', ({ props }) =>
      expect(renderWithNEL(<Dropdown {...requiredProps} {...props} />)).toMatchSnapshot()
    );

    test.each`
      name                                          | event          | open     | props
      ${'after focus'}                              | ${'focus'}     | ${false} | ${{}}
      ${'after blur'}                               | ${'blur'}      | ${false} | ${{}}
      ${'after click when closed - dropdown opens'} | ${'mousedown'} | ${false} | ${{}}
      ${'after click when open'}                    | ${'mousedown'} | ${true}  | ${{}}
    `('$name', ({ event, props, open }) => {
      const { root, wrapper } = mountWithNEL(<Dropdown {...requiredProps} {...props} />);
      const el = wrapper.find('[aria-haspopup]');

      if (open) el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE });

      el.simulate(event);
      expect(wrapper.render()).toMatchSnapshot();

      root.unmount();
    });

    test('after blur when options are visible', () => {
      const { root, wrapper } = mountWithNEL(<Dropdown {...requiredProps} />);

      wrapper
        .find('[aria-haspopup]')
        .simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open

      wrapper.find('[role="listbox"]').simulate('blur');
      expect(wrapper.render()).toMatchSnapshot();

      root.unmount();
    });

    describe('after pressing', () => {
      test.each`
        name                                                                               | open     | selected                             | event
        ${'UP key when closed - dropdown open'}                                            | ${false} | ${undefined}                         | ${{ keyCode: keyCodes.KEY_UP }}
        ${'UP key when open with no selection - last option active'}                       | ${true}  | ${undefined}                         | ${{ keyCode: keyCodes.KEY_UP }}
        ${'UP key when open with a selection (not first option) - previous option active'} | ${true}  | ${options[1].value}                  | ${{ keyCode: keyCodes.KEY_UP }}
        ${'DOWN key when closed - dropdown open'}                                          | ${false} | ${undefined}                         | ${{ keyCode: keyCodes.KEY_DOWN }}
        ${'DOWN key when open with no selection - first option active'}                    | ${true}  | ${undefined}                         | ${{ keyCode: keyCodes.KEY_DOWN }}
        ${'DOWN key when closed with a selection not last option) - next option active'}   | ${false} | ${options[options.length - 2].value} | ${{ keyCode: keyCodes.KEY_DOWN }}
        ${'DOWN key when open with a selection not last option) - next option active'}     | ${true}  | ${options[options.length - 2].value} | ${{ keyCode: keyCodes.KEY_DOWN }}
        ${'ENTER key when closed - dropdown open'}                                         | ${false} | ${undefined}                         | ${{ keyCode: keyCodes.KEY_RETURN }}
        ${'ENTER key when open - dropdown close'}                                          | ${true}  | ${undefined}                         | ${{ keyCode: keyCodes.KEY_RETURN }}
        ${'SPACEBAR key when closed - dropdown open'}                                      | ${false} | ${undefined}                         | ${{ keyCode: keyCodes.KEY_SPACE }}
        ${'SPACEBAR key when open - dropdown close'}                                       | ${true}  | ${undefined}                         | ${{ keyCode: keyCodes.KEY_SPACE }}
        ${'TAB key when open - dropdown remains open'}                                     | ${true}  | ${undefined}                         | ${{ keyCode: keyCodes.KEY_TAB }}
        ${'ESCAPE key when open - dropdown close'}                                         | ${true}  | ${undefined}                         | ${{ keyCode: keyCodes.KEY_ESCAPE }}
      `('$name', ({ open, event, selected }) => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} value={selected} />
        );
        const el = wrapper.find('[aria-haspopup]');

        if (open) el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE });

        el.simulate('keydown', event);

        expect(el.render()).toMatchSnapshot();
        root.unmount();
      });

      test('SPACEBAR key when open and with active option - ', () => {
        const { root, wrapper } = mountWithNEL(<Dropdown {...requiredProps} />);
        const el = wrapper.find('[aria-haspopup]');

        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE });
        el.simulate('keydown', { keyCode: keyCodes.KEY_DOWN });
        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE });

        expect(el.render()).toMatchSnapshot();
        root.unmount();
      });
    });

    test('after opening with container ref', () => {
      const containerRef = createRef<HTMLDivElement>();
      const { root, wrapper } = mountWithNEL(
        <div ref={containerRef}>
          <Dropdown {...requiredProps} {...{ containerRef }} />
        </div>
      );
      const el = wrapper.find('[aria-haspopup]');

      el.simulate('mousedown');
      expect(el.render()).toMatchSnapshot();

      root.unmount();
    });

    test('after value changes', () => {
      const DropdownValueChange = () => {
        const [value, setValue] = useState(options[1].value);

        useEffect(() => {
          setValue(options[2].value);
        }, []);

        return <Dropdown {...requiredProps} value={value} />;
      };

      const { root } = mountWithNEL(<DropdownValueChange />);

      expect(root.render()).toMatchSnapshot();
    });
  });

  describe('@lifecycle', () => {
    describe('componentDidUpdate', () => {
      let el;
      let root;
      let dropdownRef: React.RefObject<HTMLButtonElement>;
      let optionsRef: React.RefObject<HTMLUListElement>;
      let optionEl: HTMLDivElement;

      const mountAndOpenDropdown = (props = {}, openKey = keyCodes.KEY_SPACE) => {
        optionEl = document.createElement('div');
        optionsRef = createRef<HTMLUListElement>();
        dropdownRef = createRef<HTMLButtonElement>();

        const component = mountWithNEL(
          <Dropdown
            {...requiredProps}
            {...props}
            optionsRef={optionsRef}
            ref={dropdownRef}
          />
        );

        root = component.root;
        el = component.wrapper.find('[aria-haspopup]');

        jest
          .spyOn<HTMLUListElement, 'getBoundingClientRect'>(
            optionsRef.current,
            'getBoundingClientRect'
          )
          .mockReturnValue(optionsRect);

        jest
          .spyOn<HTMLUListElement, 'querySelector'>(optionsRef.current, 'querySelector')
          .mockReturnValue(optionEl);

        jest.spyOn<HTMLUListElement, 'focus'>(optionsRef.current, 'focus');
        jest.spyOn<HTMLButtonElement, 'focus'>(dropdownRef.current, 'focus');

        el.simulate('keydown', { keyCode: openKey });
        el.update();
      };

      afterEach(() => {
        root.unmount();
      });

      describe('when opened', () => {
        test('focus on options', () => {
          mountAndOpenDropdown();
          jest.runOnlyPendingTimers();
          expect(optionsRef.current.focus).toBeCalledTimes(1);
        });

        test('scrolls to current option', () => {
          const activeOptionTop = 200;
          let timesOpen = 0;

          mountAndOpenDropdown({ value: options[lastOptionIndex].value });

          expect(optionsRef.current.scrollTop).toEqual(0);

          optionEl.getBoundingClientRect = jest.fn().mockReturnValue({
            ...optionRect,
            top: activeOptionTop,
          });

          el.simulate('keydown', { keyCode: keyCodes.KEY_ESCAPE }); // close
          el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open
          timesOpen += 2;

          expect(optionsRef.current.scrollTop).toEqual(activeOptionTop * timesOpen);
        });
      });

      describe('when closed', () => {
        test('focus on dropdown if options has focus', () => {
          mountAndOpenDropdown();

          optionsRef.current.blur();
          el.simulate('keydown', { keyCode: keyCodes.KEY_ESCAPE }); // close
          jest.runOnlyPendingTimers();
          expect(dropdownRef.current.focus).not.toBeCalled();

          el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open
          el.simulate('keydown', { keyCode: keyCodes.KEY_ESCAPE }); // close
          jest.runOnlyPendingTimers();
          expect(dropdownRef.current.focus).toBeCalledTimes(1);
        });
      });

      describe('when active option changes', () => {
        test('scrolls down to active option', () => {
          mountAndOpenDropdown({}, keyCodes.KEY_DOWN);

          const activeOptionTop = 200;
          const optionsTop = 40;

          optionEl.getBoundingClientRect = jest.fn().mockReturnValue({
            ...optionRect,
            top: activeOptionTop,
          });

          optionsRef.current.getBoundingClientRect = jest.fn().mockReturnValue({
            ...optionsRect,
            top: optionsTop,
          });

          el.simulate('keydown', { keyCode: keyCodes.KEY_DOWN });

          expect(optionsRef.current.scrollTop).toEqual(activeOptionTop - optionsTop);
        });

        test('scrolls to active option', () => {
          mountAndOpenDropdown({}, keyCodes.KEY_UP);

          const activeOptionTop = 40;
          const optionsTop = 160;

          optionEl.getBoundingClientRect = jest.fn().mockReturnValue({
            ...optionRect,
            top: activeOptionTop,
          });

          optionsRef.current.getBoundingClientRect = jest.fn().mockReturnValue({
            ...optionsRect,
            top: optionsTop,
          });

          optionsRef.current.scrollTop = optionsTop;

          el.simulate('keydown', { keyCode: keyCodes.KEY_DOWN });

          expect(optionsRef.current.scrollTop).toEqual(activeOptionTop);
        });
      });

      test('calls change event handler when selected option changes', () => {
        mountAndOpenDropdown();

        el.simulate('keydown', { keyCode: keyCodes.KEY_DOWN }); // change option
        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // select + close

        expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
        expect(requiredProps.onChange).toHaveBeenCalledWith(options[1]);
      });
    });
  });

  describe('@events', () => {
    test('on click calls event handler', () => {
      const onMouseDown = jest.fn();
      const { root, wrapper } = mountWithNEL(
        <Dropdown {...requiredProps} onMouseDown={onMouseDown} />
      );
      wrapper.find('[aria-haspopup]').simulate('mousedown');

      expect(onMouseDown).toHaveBeenCalledTimes(1);
      expect(onMouseDown).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'mousedown' })
      );

      root.unmount();
    });

    describe('on blur', () => {
      const onBlur = jest.fn();

      test('calls event handler on dropdown when options are hidden', () => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} onBlur={onBlur} />
        );

        wrapper.find('[aria-haspopup]').simulate('blur');
        jest.runOnlyPendingTimers();

        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onBlur).toHaveBeenCalledWith(expect.objectContaining({ type: 'blur' }));

        root.unmount();
      });

      test('calls event handler on options when visible', () => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} onBlur={onBlur} />
        );

        wrapper
          .find('[aria-haspopup]')
          .simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open

        wrapper.find('[role="listbox"]').simulate('blur');
        jest.runOnlyPendingTimers();

        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(onBlur).toHaveBeenCalledWith(expect.objectContaining({ type: 'blur' }));

        root.unmount();
      });

      test('does not call event handler when options are visible', () => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} onBlur={onBlur} />
        );

        const el = wrapper.find('[aria-haspopup]');

        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open

        wrapper.find('[aria-haspopup]').simulate('blur');

        expect(onBlur).not.toHaveBeenCalled();

        root.unmount();
      });

      test('does not call event handler when options are closed', () => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} onBlur={onBlur} />
        );

        const el = wrapper.find('[aria-haspopup]');

        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open
        el.simulate('keydown', { keyCode: keyCodes.KEY_ESCAPE }); // close

        expect(onBlur).not.toHaveBeenCalled();

        root.unmount();
      });

      test('does not call event handler when an option is selected', () => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} onBlur={onBlur} />
        );

        const el = wrapper.find('[aria-haspopup]');

        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // open
        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE }); // select + close

        expect(onBlur).not.toHaveBeenCalled();

        root.unmount();
      });
    });

    describe('on keydown', () => {
      const event = 'keydown';
      const onKeyDown = jest.fn();
      const preventDefault = jest.fn();

      test.each`
        name                               | keyCode                | preventsDefault | open
        ${'with END key when open'}        | ${keyCodes.KEY_END}    | ${true}         | ${true}
        ${'with HOME key when open'}       | ${keyCodes.KEY_HOME}   | ${true}         | ${true}
        ${'with UP key when open'}         | ${keyCodes.KEY_UP}     | ${true}         | ${true}
        ${'with UP key when closed'}       | ${keyCodes.KEY_UP}     | ${true}         | ${false}
        ${'with DOWN key when open'}       | ${keyCodes.KEY_DOWN}   | ${true}         | ${true}
        ${'with DOWN key when closed'}     | ${keyCodes.KEY_DOWN}   | ${true}         | ${false}
        ${'with ENTER key when open'}      | ${keyCodes.KEY_RETURN} | ${true}         | ${true}
        ${'with ENTER key when closed'}    | ${keyCodes.KEY_RETURN} | ${true}         | ${false}
        ${'with SPACEBAR key when open'}   | ${keyCodes.KEY_SPACE}  | ${true}         | ${true}
        ${'with SPACEBAR key when closed'} | ${keyCodes.KEY_SPACE}  | ${true}         | ${false}
        ${'with TAB key when open'}        | ${keyCodes.KEY_TAB}    | ${true}         | ${true}
        ${'with TAB key when closed'}      | ${keyCodes.KEY_TAB}    | ${false}        | ${false}
        ${'with ESC key when open'}        | ${keyCodes.KEY_ESCAPE} | ${false}        | ${true}
        ${'with ESC key when closed'}      | ${keyCodes.KEY_ESCAPE} | ${false}        | ${false}
      `('$name calls keydown event handler', ({ keyCode, preventsDefault, open }) => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} {...{ onKeyDown }} />
        );

        const el = wrapper.find('[aria-haspopup]');

        if (open) el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE });

        onKeyDown.mockClear();
        el.simulate('keydown', { keyCode, preventDefault });

        expect(preventDefault).toHaveBeenCalledTimes(preventsDefault ? 1 : 0);
        expect(onKeyDown).toHaveBeenCalledTimes(1);
        expect(onKeyDown).toHaveBeenCalledWith(
          expect.objectContaining({ type: event, keyCode })
        );
        root.unmount();
      });

      test.each`
        name               | keyCode
        ${'with END key'}  | ${keyCodes.KEY_END}
        ${'with HOME key'} | ${keyCodes.KEY_HOME}
      `('$name does not open dropdown', ({ keyCode }) => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} {...{ onKeyDown }} />
        );

        const el = wrapper.find('[aria-haspopup]');
        el.simulate('keydown', { keyCode });

        expect(el.find({ 'aria-expanded': false })).toHaveLength(1);
        root.unmount();
      });

      test.each`
        name               | keyCode              | sourceIndex        | targetIndex
        ${'with END key'}  | ${keyCodes.KEY_END}  | ${0}               | ${lastOptionIndex}
        ${'with HOME key'} | ${keyCodes.KEY_HOME} | ${lastOptionIndex} | ${0}
        ${'with UP key'}   | ${keyCodes.KEY_UP}   | ${0}               | ${0}
        ${'with DOWN key'} | ${keyCodes.KEY_DOWN} | ${0}               | ${1}
      `('$name sets active dropdown option', ({ keyCode, sourceIndex, targetIndex }) => {
        const { root, wrapper } = mountWithNEL(
          <Dropdown {...requiredProps} {...{ onKeyDown }} />
        );

        const el = wrapper.find('[aria-haspopup]');
        el.simulate('keydown', { keyCode: keyCodes.KEY_SPACE });

        const items = new Array(sourceIndex);
        for (const _i of items) {
          el.simulate('keydown', { keyCode: keyCodes.KEY_DOWN });
        }
        el.simulate('keydown', { keyCode });

        const targetWrapper = root.find({ active: true });

        expect(targetWrapper).toHaveLength(1);
        expect(targetWrapper.text()).toEqual(options[targetIndex].text);
        root.unmount();
      });
    });

    test('changing selected dropdown option calls on change with item index', () => {
      const itemIndex = options.length - 1;
      const { root, wrapper } = mountWithNEL(<Dropdown {...requiredProps} />);

      wrapper
        .find('[aria-haspopup]')
        .simulate('keydown', { keyCode: keyCodes.KEY_DOWN })
        .update()
        .find('[data-ref="dropdownOption"][aria-selected]')
        .at(itemIndex)
        .simulate('mousedown');

      expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
      expect(requiredProps.onChange).toHaveBeenCalledWith(options[itemIndex]);
      root.unmount();
    });
  });

  describe('findNextIndex()', () => {
    test('returns current index with an empty array', () => {
      expect(findNextIndex([], 0, true)).toBe(0);
    });

    test('returns last index when ascending and current index is -1', () => {
      expect(findNextIndex(options, -1, true)).toBe(lastOptionIndex);
    });

    describe('from start of list', () => {
      test('returns first index when asceding', () => {
        expect(findNextIndex(options, 0, true)).toBe(0);
      });

      test('returns next index when descending', () => {
        expect(findNextIndex(options, 0)).toBe(1);
      });
    });

    describe('from middle of list', () => {
      test('returns previous index when asceding', () => {
        expect(findNextIndex(options, 1, true)).toBe(0);
      });

      test('returns next index when asceding', () => {
        expect(findNextIndex(options, 1)).toBe(2);
      });
    });

    describe('from end of list', () => {
      test('returns previous index when asceding', () => {
        expect(findNextIndex(options, 2, true)).toBe(1);
      });

      test('return current same index', () => {
        expect(findNextIndex(options, 2)).toBe(2);
      });
    });
  });
});
