import { renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import React from 'react';

import { Checkbox, CheckRadioVariantProps, Radio } from '.';
import { CheckRadio, CheckRadioProps } from './CheckRadio';

describe('@renders', () => {
  const requiredCheckboxProps = {
    id: 'checkbox-test',
    label: 'checkbox-test',
    variant: 'checkbox',
  };
  const requiredRadioProps = {
    id: 'radio-test',
    label: 'radio-test',
    variant: 'radio',
  };

  const titleNode: CheckRadioVariantProps['label'] = (
    <span>
      a <strong>custom</strong> title
    </span>
  );

  const renderComponent = (props: CheckRadioProps) =>
    renderWithNEL(<CheckRadio {...props} />);

  test.each`
    name                               | props
    ${'as checkbox'}                   | ${requiredCheckboxProps}
    ${'as checkbox with custom title'} | ${{ ...requiredCheckboxProps, label: titleNode }}
    ${'with warning as checkbox'}      | ${{ ...requiredCheckboxProps, alert: 'warning' }}
    ${'with error as checkbox'}        | ${{ ...requiredCheckboxProps, alert: 'error' }}
    ${'with data-ref as checkbox'}     | ${{ ...requiredCheckboxProps, 'data-ref': 'uid' }}
    ${'as radio'}                      | ${requiredRadioProps}
    ${'as radio with custom title'}    | ${{ ...requiredRadioProps, label: titleNode }}
    ${'with warning as radio'}         | ${{ ...requiredRadioProps, alert: 'warning' }}
    ${'with error as radio'}           | ${{ ...requiredRadioProps, alert: 'error' }}
    ${'with data-ref as radio'}        | ${{ ...requiredRadioProps, 'data-ref': 'uid' }}
  `('$name', ({ props }) => {
    expect(renderComponent(props)).toMatchSnapshot();
  });

  describe('variant shorthand', () => {
    const requiredProps = {
      id: 'variantTest',
      label: 'variantTest',
    };

    test.each`
      name              | Component
      ${'<Checkbox />'} | ${Checkbox}
      ${'<Radio />'}    | ${Radio}
    `('@renders $name', ({ Component }) => {
      expect(renderWithNEL(<Component {...requiredProps} />)).toMatchSnapshot();
    });
  });
});
