import { sitePath } from '../util';
import getDesignSystemCategoryFields from './utils/design-system-category-fields';

export default {
  file: sitePath('src/pages/design-system/templates.md'),
  label: 'Design System: Templates Overview',
  name: 'templates-overview',
  fields: getDesignSystemCategoryFields('templates'),
};
