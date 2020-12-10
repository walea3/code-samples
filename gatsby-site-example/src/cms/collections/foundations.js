import { sitePath } from '../util';
import { platformFields } from './utils/design-system-fields';

export default {
  name: 'foundations',
  label: 'Design System - Layout foundations',
  label_singular: 'Layout foundation',
  folder: sitePath('src/pages/design-system/layout-foundations'),
  identifier_field: 'title',
  create: true,
  editor: { preview: true },
  fields: platformFields,
};
