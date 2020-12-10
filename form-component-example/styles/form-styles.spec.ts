import { renderStyles } from '@nel-ui/tooling-styling/test-utils';
import styles, { theme } from '.';

describe('@nel-ui/form-styles', () => {
  test('css', () => expect(renderStyles(styles)).toMatchSnapshot());
  test('theme', () => expect(theme).toMatchSnapshot());
});
