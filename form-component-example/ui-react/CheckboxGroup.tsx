import cx from 'classnames';
import React, { ChangeEvent, ReactText, useEffect, useState } from 'react';

import { Checkbox, CheckRadioSingular, getIntersectionByValue } from './';
import FormStyles from './FormStyles';

type DivAttr = React.HTMLAttributes<HTMLDivElement>;
type InputEvent = ChangeEvent<HTMLInputElement>;
export type CheckboxGroupResponseItem = number[];

type CheckboxGroupItem = CheckRadioSingular & {
  value: ReactText;
};

export interface CheckboxGroupProps extends Omit<DivAttr, 'onChange'> {
  name: string;
  inline?: boolean;
  className?: string;
  'data-ref'?: string;
  value?: Array<CheckboxGroupItem['value']>;
  items: CheckboxGroupItem[];
  onChange(
    clickEvent: InputEvent,
    checkboxesSelected: {
      selectedItems: CheckRadioSingular[];
      selectedIndexes: CheckboxGroupResponseItem;
    }
  ): void;
}

export function CheckboxGroup({
  name,
  className,
  inline,
  'data-ref': dataRef,
  items,
  value,
  onChange,
  ...props
}: CheckboxGroupProps) {
  if (!items || (items && !items.length)) return null;

  const initialValues = value ? getIntersectionByValue(items, value) : [];

  const nextOptions = items.map(({ id, ...item }, index) => ({
    id,
    checked: initialValues[index] || !!item.checked,
    ...item,
  }));

  const [options, setOptions] = useState(nextOptions);

  useEffect(() => setOptions(nextOptions), [items]);

  const handleChange = (selectedIndex: number) => (event: InputEvent): void => {
    event.stopPropagation();

    const toggleOptions = options.map((checkbox, i) => ({
      ...checkbox,
      checked: i === selectedIndex ? event.target.checked : checkbox.checked,
    }));

    setOptions(toggleOptions);

    const checkboxesSelected = getOnChangeValues(toggleOptions);

    onChange(event, checkboxesSelected);
  };

  const getOnChangeValues = (array: CheckboxGroupProps['items']) => {
    const getIndexes = array.reduce(
      (acc: number[], { checked }, optionIndex) =>
        checked ? [...acc, optionIndex] : acc,
      []
    );

    return {
      selectedItems: array.filter(({ checked }) => checked),
      selectedIndexes: getIndexes,
    };
  };

  const displayMobileInline = items.length <= 2;

  return (
    <FormStyles>
      {({ classes }) => (
        <div className={cx(classes.checkRadioGroup, className)} {...props}>
          <div
            className={cx(classes.checkRadioGroupInner, {
              [classes.largeInlineGroup]: inline && !displayMobileInline,
              [classes.mobileInlineGroup]: inline && displayMobileInline,
            })}
          >
            {options.map((checkbox, i) => (
              <Checkbox
                key={checkbox.id}
                data-ref={dataRef ? `${dataRef}.${i}` : undefined}
                name={name}
                {...checkbox}
                onChange={handleChange(i)}
                inline={inline}
              />
            ))}
          </div>
        </div>
      )}
    </FormStyles>
  );
}
