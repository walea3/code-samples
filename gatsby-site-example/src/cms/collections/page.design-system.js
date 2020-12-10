import { sitePath } from '../util';
import { getSimpleRichTextField } from './fields/simple-rich-text';

export default {
  file: sitePath('src/pages/design-system.md'),
  label: 'Design System Overview',
  name: 'design-system-overview',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'design-system-overview',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    getSimpleRichTextField({ label: 'Lead', name: 'lead' }),
    getSimpleRichTextField({ label: 'Description', name: 'description' }),
  ],
};
