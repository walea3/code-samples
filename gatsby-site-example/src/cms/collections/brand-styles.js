import { sitePath } from '../util';
import { platformlessFields } from './utils/design-system-fields';

export default {
  name: 'brand-styles',
  label: 'Design System - Brand styles',
  label_singular: 'Brand style',
  folder: sitePath('src/pages/design-system/brand-styles'),
  identifier_field: 'title',
  create: true,
  editor: { preview: true },
  fields: platformlessFields,
};
