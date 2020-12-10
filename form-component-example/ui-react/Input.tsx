import { utils } from '@nel-ui/form-styles';
import { getDataRef } from '@nel-ui/js-helpers';
import cx from 'classnames';
import React, { createRef, forwardRef, useState } from 'react';

import { FieldControlLabel, FieldControlLabelProps } from './FieldControlLabel';
import { FormAlertMessageProps } from './FormAlertMessage';
import { PrefixSuffixLabel, PrefixSuffixLabelProps } from './PrefixSuffixLabel';

import FormStyles from './FormStyles';

type InputAttr = React.InputHTMLAttributes<HTMLInputElement>;
type InputFocusEvent = React.FocusEvent<HTMLInputElement>;

type FilteredInputAttr = Pick<InputAttr, Exclude<keyof InputAttr, 'prefix'>>;

export interface InputProps extends FilteredInputAttr {
  'data-ref'?: string;

  /**
   * Input ID - used to associate label
   */
  id: string;
  /**
   * Input label which different from Field's label
   */
  label?: FieldControlLabelProps['label'];

  /**
   * Inline input
   */
  inline?: boolean;

  /**
   * Alert status
   */
  alert?: FormAlertMessageProps['variant'];

  /**
   * Inline input prefix
   */
  prefix?: PrefixSuffixLabelProps['children'];

  /**
   * Inline input suffix
   */
  suffix?: PrefixSuffixLabelProps['children'];
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      inline,
      alert,
      prefix,
      suffix,
      className,
      'data-ref': dataRef,
      ...inputProps
    },
    ref
  ) => {
    const [hasFocus, setFocus] = useState<boolean>(false);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || createRef();

    const handleFocus = (event: InputFocusEvent): void => {
      const { onFocus } = inputProps;

      setFocus(true);
      if (onFocus) onFocus(event);
    };

    const handleBlur = (event: InputFocusEvent): void => {
      const { onBlur } = inputProps;

      setFocus(false);
      if (onBlur) onBlur(event);
    };

    const handlePrefixSuffixClick = (): void => {
      inputRef.current.focus();
    };

    const { size, disabled, style } = inputProps;
    const shouldInline: boolean = inline || !!size;
    const inputWidth: number = size && utils.getInputWidth(size);

    const commonEvents = {
      onBlur: handleBlur,
      onFocus: handleFocus,
    };

    const inputLabelId = label ? `${id}Label` : undefined;
    const prefixId = prefix ? `${id}Prefix` : undefined;
    const suffixId = suffix ? `${id}Suffix` : undefined;

    const prefixSuffixProps = (isSuffix: boolean) => {
      const prefixSuffixId = isSuffix ? suffixId : prefixId;
      const prefixSuffixContent = isSuffix ? suffix : prefix;

      return {
        ...commonEvents,
        onClick: handlePrefixSuffixClick,
        isSuffix,
        id: prefixSuffixId,
        'data-ref': dataRef,
        children: prefixSuffixContent,
      };
    };

    const labelledby =
      prefix || suffix
        ? [inputProps['aria-labelledby'], inputLabelId, id, prefixId, suffixId]
            .join(' ')
            .trim()
        : undefined;

    return (
      <FormStyles>
        {({ classes }) => (
          <FieldControlLabel
            className={className}
            data-ref={dataRef}
            label={label}
            htmlFor={id}
            id={inputLabelId}
            inline={shouldInline}
          >
            <div
              data-ref={getDataRef(dataRef, 'inputContainer')}
              className={cx(classes.input, {
                [className]: !label && className,
                [classes.inlineInput]: shouldInline && !label,
                [classes.focussedInput]: hasFocus,
                [classes.disabledInput]: disabled,
                [classes[`${alert}Input`]]: alert,
              })}
            >
              {prefix && <PrefixSuffixLabel {...prefixSuffixProps(false)} />}

              <input
                {...inputProps}
                {...commonEvents}
                id={id}
                ref={inputRef}
                data-ref={getDataRef(dataRef, 'input')}
                className={classes.inputControl}
                aria-invalid={!!alert}
                aria-labelledby={labelledby}
                style={inputWidth ? { ...style, width: inputWidth } : style}
              />

              {suffix && <PrefixSuffixLabel {...prefixSuffixProps(true)} />}
            </div>
          </FieldControlLabel>
        )}
      </FormStyles>
    );
  }
);

Input.displayName = 'Input';
