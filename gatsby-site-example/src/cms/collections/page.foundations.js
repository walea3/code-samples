import { sitePath } from '../util';
import getDesignSystemCategoryFields from './utils/design-system-category-fields';

export default {
  file: sitePath('src/pages/design-system/layout-foundations.md'),
  label: 'Design System: Layout Foundations Overview',
  name: 'foundations-overview',
  fields: getDesignSystemCategoryFields('foundations'),
};
