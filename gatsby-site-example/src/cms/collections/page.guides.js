import { sitePath } from '../util';

export default {
  file: sitePath('src/pages/guides.md'),
  label: 'Guides',
  name: 'guides',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'guides-page',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Lead',
      name: 'lead',
      widget: 'markdown',
    },
    {
      label: 'Guides',
      label_singular: 'Guide',
      name: 'guides',
      widget: 'list',
      fields: [
        {
          label: 'Menu Item',
          name: 'guide',
          widget: 'relation',
          collection: 'guide',
          searchFields: ['title'],
          valueField: 'title',
        },
      ],
    },
  ],
};
