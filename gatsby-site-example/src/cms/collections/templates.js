import { sitePath } from '../util';
import { platformlessFields } from './utils/design-system-fields';

export default {
  name: 'templates',
  label: 'Design System - Templates',
  label_singular: 'Template',
  folder: sitePath('src/pages/design-system/templates'),
  identifier_field: 'title',
  create: true,
  editor: { preview: true },
  fields: platformlessFields,
};
