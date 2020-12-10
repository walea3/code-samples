import { ReactWrapper } from 'enzyme';
import { CheckRadioProps } from './';

const findCheckRadio = (
  variant: CheckRadioProps['variant'],
  wrapper: ReactWrapper,
  index: number
) => wrapper.find(`[data-ref="${variant}Input"]`).at(index);

export const findRadio = (wrapper: ReactWrapper, index: number) =>
  findCheckRadio('radio', wrapper, index);

export const findCheckbox = (wrapper: ReactWrapper, index: number) =>
  findCheckRadio('checkbox', wrapper, index);

const clickCheckRadio = (
  variant: CheckRadioProps['variant'],
  wrapper: ReactWrapper,
  selectedIndex: number,
  simulateOptions: {}
) => {
  const input = findCheckRadio(variant, wrapper, selectedIndex);

  input.simulate('change', {
    target: { checked: true },
    ...simulateOptions,
  });
  wrapper.update();

  return {
    isChecked: (input.getDOMNode() as any).checked,
  };
};

export const clickCheckbox = (
  wrapper: ReactWrapper,
  selectedIndex: number,
  simulateOptions = {}
) => clickCheckRadio('checkbox', wrapper, selectedIndex, simulateOptions);

export const clickRadio = (
  wrapper: ReactWrapper,
  selectedIndex: number,
  simulateOptions = {}
) => clickCheckRadio('radio', wrapper, selectedIndex, simulateOptions);
