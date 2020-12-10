import { sitePath } from '../util';
import getDesignSystemCategoryFields from './utils/design-system-category-fields';

export default {
  file: sitePath('src/pages/design-system/patterns.md'),
  label: 'Design System: Patterns Overview',
  name: 'patterns-overview',
  fields: getDesignSystemCategoryFields('patterns'),
};
