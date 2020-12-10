import { mountWithNEL, renderWithNEL } from '@nel-ui/tooling-react/test-utils';
import { ReactWrapper } from 'enzyme';
import React from 'react';
import { PrefixSuffixLabel, PrefixSuffixLabelProps } from './PrefixSuffixLabel';

export const findDataRef = (node: ReactWrapper, targetRef: string): ReactWrapper =>
  node.find(`[data-ref="${targetRef}"]`);

describe('<PrefixSuffixLabel />', () => {
  const requiredProps = {
    id: 'example',
    children: '',
    onClick: jest.fn(),
  };

  const mountComponent = (props?: Partial<PrefixSuffixLabelProps>) =>
    mountWithNEL(<PrefixSuffixLabel {...requiredProps} {...props} />);
  const renderComponent = (props?: Partial<PrefixSuffixLabelProps>) =>
    renderWithNEL(<PrefixSuffixLabel {...requiredProps} {...props} />);

  describe('@renders', () => {
    test.each`
      name                            | props
      ${'as default'}                 | ${{}}
      ${'with isSuffix'}              | ${{ isSuffix: true }}
      ${'with data-ref'}              | ${{ 'data-ref': 'uid' }}
      ${'with data-ref and isSuffix'} | ${{ 'data-ref': 'uid', isSuffix: true }}
      ${'with other props'}           | ${{ 'data-custom': 'uid' }}
    `(`$name`, ({ name, props }) => {
      expect(renderComponent({ ...props, children: name })).toMatchSnapshot();
    });
  });

  describe('@events', () => {
    test('should call onClick when clicked', () => {
      const { root, wrapper } = mountComponent();

      const el = findDataRef(wrapper, 'inputPrefix');
      el.simulate('click');

      expect(requiredProps.onClick).toHaveBeenCalledTimes(1);

      root.unmount();
    });
  });
});
