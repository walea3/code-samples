import { Icon } from '@nel-ui/icon-react';
import { calcElementRect, ElementRect, getDataRef, keyCodes } from '@nel-ui/js-helpers';
import cx from 'classnames';
import React, { Component, createRef, forwardRef } from 'react';

import { emptyOption, findNextIndex, getIndexByValue, getOptionByValue } from './utils';

import { DropdownOption, DropdownSelectableOption } from './DropdownOption';
import { FieldControlLabel, FieldControlLabelProps } from './FieldControlLabel';
import FormStyles from './FormStyles';

type KeyboardEvent = React.KeyboardEvent<HTMLElement>;
type FocusEvent = React.FocusEvent<HTMLElement>;
type MouseEvent = React.MouseEvent<HTMLElement>;
type Attr = React.HTMLAttributes<HTMLElement>;
type BaseAttr = Pick<Attr, Exclude<keyof Attr, 'onChange'>>;

export interface DropdownProps extends BaseAttr {
  options: DropdownSelectableOption[];
  value?: React.ReactText;
  label?: FieldControlLabelProps['label'];
  alert?: 'warning' | 'error';
  disabled?: boolean;
  dropdownRef?: React.RefObject<HTMLButtonElement>;
  optionsRef?: React.RefObject<HTMLUListElement>;
  containerRef?: React.RefObject<HTMLElement>;
  'data-ref'?: string;
  'data-label-id'?: string;
  onChange(selectedOption: DropdownSelectableOption): void;
}

interface DropdownState {
  activeIndex: number;
  selectedOption: Partial<DropdownSelectableOption>;
  isOpen: boolean;
  showOptions: boolean;
  rect: ElementRect;
}

class DropdownBase extends Component<DropdownProps, DropdownState> {
  static displayName = 'Dropdown';
  static Option = DropdownOption;

  dropdownRef = this.props.dropdownRef || createRef();
  optionsRef = this.props.optionsRef || createRef();

  state = {
    activeIndex: getIndexByValue(this.props.options, this.props.value),
    selectedOption: getOptionByValue(this.props.options, this.props.value),
    isOpen: false,
    showOptions: false,
    rect: undefined,
  };

  componentDidUpdate(prevProps, prevState) {
    const { isOpen, showOptions, activeIndex, selectedOption } = this.state;
    const { value } = this.props;
    const hasValueChanged = prevProps.value !== value;
    const hasActiveChanged = prevState.activeIndex !== activeIndex && activeIndex > -1;
    const hasSelectedChanged =
      prevState.selectedOption !== selectedOption &&
      (typeof value === 'undefined' || value !== selectedOption.value);

    if (!prevState.showOptions && showOptions) {
      const options = this.optionsRef.current;
      setTimeout(() => options.focus());
    }

    const isClosing =
      prevState.isOpen && !isOpen && document.activeElement === this.optionsRef.current;
    const hasStateChanged =
      prevState.showOptions !== showOptions || prevState.isOpen !== isOpen;

    if (isClosing) {
      const dropdown = this.dropdownRef.current;
      setTimeout(() => dropdown.focus());
    }

    if (hasStateChanged) {
      this.updateOptionsPosition();
    }

    if (hasActiveChanged) {
      this.scrollToCurrentOption();
    }

    if (hasValueChanged) {
      this.setState(this.getChangedOptionState(value));
    }

    if (hasSelectedChanged) this.optionChanged();
  }

  /**
   * Utilities
   */
  getProps = () => {
    const {
      'data-ref': dataRef,
      options,
      value,
      label,
      alert,
      disabled,
      'data-label-id': labelId,
      'aria-required': ariaRequired,
      className,
      containerRef,
      dropdownRef,
      optionsRef,
      onChange,
      onBlur,
      ...dropdownProps
    } = this.props;

    return {
      dataRef,
      options,
      value,
      label,
      alert,
      disabled,
      labelId,
      ariaRequired,
      className,
      containerRef,
      dropdownRef,
      optionsRef,
      dropdownProps,
      onChange,
      onBlur,
    };
  };

  getOption = (index: number): Partial<DropdownSelectableOption> =>
    index >= 0 ? this.getProps().options[index] : emptyOption;

  getClosedState = ({ selectedOption }) => ({
    isOpen: false,
    showOptions: false,
    activeIndex: getIndexByValue(this.getProps().options, selectedOption.value),
  });

  getChangedOptionState = (value: DropdownSelectableOption['value']) => {
    const { options } = this.props;
    return {
      activeIndex: getIndexByValue(options, value),
      selectedOption: getOptionByValue(options, value),
    };
  };

  optionChanged = (): void => {
    this.getProps().onChange(this.state.selectedOption);
  };

  scrollToCurrentOption = (): void => {
    const { showOptions, isOpen } = this.state;
    if (!showOptions || !isOpen) return;

    const optionsElement = this.optionsRef.current;
    const optionElement = optionsElement.querySelector('[aria-selected=true]');

    if (optionElement) {
      const option = optionElement.getBoundingClientRect();
      const options = optionsElement.getBoundingClientRect();

      const offset = option.top - options.top;
      const height = options.height;

      if (offset + option.height >= height || offset < 0) {
        optionsElement.scrollTop = offset + optionsElement.scrollTop;
      }
    }
  };

  updateOptionsPosition = () => {
    this.setState(
      ({ isOpen, showOptions }) => ({
        showOptions: isOpen,
        rect:
          showOptions && isOpen
            ? calcElementRect(
                [
                  this.optionsRef.current,
                  this.dropdownRef.current,
                  this.props.containerRef && this.props.containerRef.current,
                ],
                {
                  absolutePosition: false,
                  onlyVertical: true,
                  ignoreMargin: true,
                }
              )
            : undefined,
      }),
      () => this.scrollToCurrentOption()
    );
  };

  /**
   * Event Handlers
   */
  handleChange = (value: DropdownSelectableOption['value']): void => {
    this.setState({
      isOpen: false,
      ...this.getChangedOptionState(value),
    });
  };

  handleKeyDown = (event: KeyboardEvent): void => {
    event.persist();

    const { keyCode } = event;
    const {
      options,
      dropdownProps: { onKeyDown },
    } = this.getProps();

    const callback = () => onKeyDown && onKeyDown(event);

    switch (keyCode) {
      case keyCodes.KEY_END:
      case keyCodes.KEY_HOME:
        if (this.state.isOpen) {
          event.preventDefault();
          this.setState(
            () => ({
              activeIndex: keyCode === keyCodes.KEY_HOME ? 0 : options.length - 1,
            }),
            callback
          );
        }
        break;

      case keyCodes.KEY_UP:
      case keyCodes.KEY_DOWN:
        event.preventDefault();
        this.setState(({ isOpen, selectedOption, activeIndex }) => {
          const isAscending: boolean = keyCode === keyCodes.KEY_UP;
          const { value } = selectedOption;
          let nextActiveIndex: number = activeIndex;

          if (!value || isOpen) {
            nextActiveIndex =
              activeIndex <= 0 && isAscending
                ? 0
                : findNextIndex(options, activeIndex, isAscending);
          }

          return {
            isOpen: true,
            activeIndex: nextActiveIndex,
          };
        }, callback);
        break;

      case keyCodes.KEY_RETURN:
      case keyCodes.KEY_SPACE:
        event.preventDefault();
        this.setState(({ isOpen, selectedOption, activeIndex }) => {
          const hasActiveIndex: boolean = activeIndex > -1;

          return {
            isOpen: !isOpen,
            activeIndex: hasActiveIndex
              ? activeIndex
              : findNextIndex(options, activeIndex, false),
            selectedOption: hasActiveIndex ? options[activeIndex] : selectedOption,
          };
        }, callback);
        break;

      case keyCodes.KEY_TAB:
        if (this.state.isOpen) event.preventDefault();
        callback();
        break;

      case keyCodes.KEY_ESCAPE:
        this.setState(this.getClosedState, callback);
        break;
    }
  };

  handleBlurDropdown = (event: FocusEvent): void => {
    const { isOpen, showOptions } = this.state;
    const { onBlur } = this.getProps();
    const isOptionsHidden = !(isOpen && showOptions);

    event.persist();

    if (onBlur && isOptionsHidden) onBlur(event);
  };

  handleBlurOptions = (event: FocusEvent): void => {
    const { onBlur } = this.getProps();
    event.persist();
    this.setState(this.getClosedState, () => {
      setTimeout(() => {
        const shouldBlur = onBlur && document.activeElement !== this.dropdownRef.current;
        if (shouldBlur) onBlur(event);
      });
    });
  };

  handleMouseDown = (event: MouseEvent): void => {
    const {
      dropdownProps: { onMouseDown },
    } = this.getProps();
    event.preventDefault();

    this.setState(
      ({ isOpen }) => ({ isOpen: !isOpen }),
      () => onMouseDown && onMouseDown(event)
    );
  };

  render() {
    const { isOpen, showOptions, selectedOption, activeIndex, rect } = this.state;
    const {
      label,
      dataRef,
      disabled,
      labelId,
      ariaRequired,
      options,
      alert,
      className,
      dropdownProps,
    } = this.getProps();

    const dropdownLabelId = label ? `${dropdownProps.id}Label` : undefined;
    const listAriaLabelledby =
      [labelId, dropdownProps['aria-labelledby']].join(' ').trim() || undefined;
    const dropdownAriaLabelledby =
      [dropdownLabelId, listAriaLabelledby, dropdownProps.id].join(' ').trim() ||
      undefined;

    const activeOptionId = this.getOption(activeIndex).id;
    const selectedOptionText = selectedOption.text;

    const baseRef = getDataRef(dataRef, 'dropdown');
    const shouldShowOptions = isOpen && showOptions;

    return (
      <FormStyles>
        {({ classes }) => (
          <FieldControlLabel
            className={className}
            data-ref={dataRef}
            label={label}
            htmlFor={dropdownProps.id}
            id={dropdownLabelId}
          >
            <div className={classes.dropdownContainer}>
              <button
                {...dropdownProps}
                type="button"
                ref={this.dropdownRef}
                data-ref={baseRef}
                className={cx(classes.dropdown, {
                  [className]: !label && className,
                  [classes.openDropdown]: shouldShowOptions,
                  [classes.openDropdownAbove]: rect && rect.top < 0,
                  [classes.disabledDropdown]: disabled,
                  [classes[`${alert}Dropdown`]]: alert,
                })}
                aria-haspopup="listbox"
                aria-labelledby={dropdownAriaLabelledby}
                aria-invalid={!!alert}
                aria-expanded={shouldShowOptions}
                disabled={disabled}
                onKeyDown={this.handleKeyDown}
                onMouseDown={this.handleMouseDown}
                onBlur={this.handleBlurDropdown}
              >
                {selectedOptionText || dropdownProps.placeholder}
                <Icon
                  name="sys-down"
                  data-ref={baseRef}
                  className={classes.dropdownIcon}
                />
              </button>

              {!disabled && (
                <ul
                  ref={this.optionsRef}
                  data-ref={getDataRef(dataRef, 'dropdownList')}
                  className={cx(classes.dropdownOptions, {
                    [className]: !label && className,
                  })}
                  role="listbox"
                  aria-labelledby={listAriaLabelledby}
                  aria-activedescendant={activeOptionId}
                  aria-required={ariaRequired}
                  aria-hidden={!shouldShowOptions}
                  tabIndex={-1}
                  style={rect}
                  onBlur={this.handleBlurOptions}
                  onKeyDown={this.handleKeyDown}
                >
                  {options.map(({ id: optionId, value, text }) => (
                    <DropdownOption
                      id={optionId}
                      key={optionId}
                      data-ref={dataRef}
                      value={value}
                      active={activeOptionId === optionId}
                      selected={selectedOption.value === value}
                      onChange={this.handleChange}
                    >
                      {text}
                    </DropdownOption>
                  ))}
                </ul>
              )}
            </div>
          </FieldControlLabel>
        )}
      </FormStyles>
    );
  }
}

export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  (props, ref: DropdownProps['dropdownRef']) => (
    <DropdownBase {...props} dropdownRef={ref} />
  )
);
