import { sitePath } from '../util';
import getDesignSystemCategoryFields from './utils/design-system-category-fields';

export default {
  file: sitePath('src/pages/design-system/brand-styles.md'),
  label: 'Design System: Brand Styles Overview',
  name: 'brand-styles-overview',
  fields: getDesignSystemCategoryFields('brandStyles'),
};
