import { sitePath } from '../util';

export default {
  file: sitePath('src/menus/main.yml'),
  label: 'Main',
  name: 'main',
  fields: [
    { name: 'menu', label: 'Menu name', widget: 'hidden', default: 'main' },
    {
      label: 'Pages',
      name: 'pages',
      widget: 'list',
      fields: [
        {
          label: 'Menu Item',
          name: 'page',
          widget: 'relation',
          collection: 'pages',
          searchFields: ['title'],
          valueField: 'title',
        },
        { label: 'Label', name: 'label', widget: 'string', required: false },
      ],
    },
  ],
};
