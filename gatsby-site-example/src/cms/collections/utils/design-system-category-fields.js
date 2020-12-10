import { getSimpleRichTextField } from '../fields/simple-rich-text';

export default (pageKey) => [
  {
    label: 'Template Key',
    name: 'templateKey',
    widget: 'hidden',
    default: 'design-system-category',
  },
  {
    label: 'Page Key',
    name: 'pageKey',
    widget: 'hidden',
    default: pageKey,
  },
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
  },
  getSimpleRichTextField({ label: 'Lead', name: 'lead' }),
  getSimpleRichTextField({ label: 'Description', name: 'description' }),
  {
    label: 'Category',
    name: 'category',
    widget: 'object',
    fields: [
      {
        label: 'Category description',
        name: 'description',
        widget: 'text',
      },
      {
        label: 'Category link title (View all)',
        name: 'linkTitle',
        widget: 'string',
        default: 'View all',
      },
      {
        label: 'Category Image',
        name: 'image',
        widget: 'image',
        default: '/img/blank_thumbnail.png',
      },
    ],
  },
];
