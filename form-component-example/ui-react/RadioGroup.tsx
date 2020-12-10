import cx from 'classnames';
import React, { ReactText, useState } from 'react';

import { CheckRadioSingular, getIndexByValue, Radio } from './';
import FormStyles from './FormStyles';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type DivAttr = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

type RadioGroupItem = CheckRadioSingular & {
  value: ReactText;
};

export interface RadioGroupProps extends DivAttr {
  inline?: boolean;
  name: string;
  value?: RadioGroupItem['value'];
  items: RadioGroupItem[];
  'data-ref'?: string;
  onChange(
    selectedEvent: InputEvent,
    selected: {
      selectedItem: CheckRadioSingular;
      selectedIndex: number;
    }
  ): void;
}

export function RadioGroup({
  inline = false,
  className,
  items,
  onChange,
  'data-ref': dataRef,
  name,
  value,
  ...props
}: RadioGroupProps) {
  if (!items || (items && !items.length)) return null;

  const initialIndex = getIndexByValue(items, value);
  const [selectedItem, setSelected] = useState<number>(initialIndex);

  const handleChange = (index: number) => (event: InputEvent): void => {
    event.stopPropagation();

    setSelected(index);
    onChange(event, {
      selectedItem: items[index],
      selectedIndex: index,
    });
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
            {items.map(({ checked, ...radio }, i) => (
              <Radio
                key={radio.id}
                data-ref={dataRef ? `${dataRef}.${i}` : undefined}
                {...radio}
                name={name}
                inline={inline}
                className={classes.radioGroupItem}
                checked={i === selectedItem}
                onChange={handleChange(i)}
              />
            ))}
          </div>
        </div>
      )}
    </FormStyles>
  );
}
