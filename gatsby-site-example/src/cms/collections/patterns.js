import { sitePath } from '../util';
import { platformFields } from './utils/design-system-fields';

export default {
  name: 'patterns',
  label: 'Design System - Patterns',
  label_singular: 'Pattern',
  folder: sitePath('src/pages/design-system/patterns'),
  identifier_field: 'title',
  create: true,
  editor: { preview: true },
  fields: platformFields,
};
