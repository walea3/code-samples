import { sitePath } from '../util';

const getMenu = ({ label, name, collection }) => ({
  label,
  name,
  widget: 'object',
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    {
      label: 'Overview Page',
      name: 'overviewPage',
      widget: 'relation',
      collection: 'pages',
      searchFields: ['title'],
      valueField: 'title',
    },
    {
      label: 'Pages',
      name: 'pages',
      widget: 'list',
      fields: [
        {
          label: 'Menu Item',
          name: 'page',
          widget: 'relation',
          collection,
          searchFields: ['title'],
          valueField: 'title',
        },
      ],
    },
  ],
});

export default {
  file: sitePath('src/menus/design-system.yml'),
  label: 'Design system',
  name: 'design-system',
  fields: [
    { name: 'menu', label: 'Menu name', widget: 'hidden', default: 'design-system' },
    {
      label: 'Overview Page',
      name: 'overviewPage',
      widget: 'relation',
      collection: 'pages',
      searchFields: ['title'],
      valueField: 'title',
    },
    getMenu({
      label: 'Brand styles',
      name: 'brandStyles',
      collection: 'brand-styles',
    }),
    getMenu({
      label: 'Layout foundations',
      name: 'foundations',
      collection: 'foundations',
    }),
    getMenu({
      label: 'Patterns',
      name: 'patterns',
      collection: 'patterns',
    }),
    getMenu({
      label: 'Templates',
      name: 'templates',
      collection: 'templates',
    }),
  ],
};
