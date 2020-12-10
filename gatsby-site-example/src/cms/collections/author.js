import { sitePath } from '../util';

export default {
  name: 'author',
  label: 'Authors',
  label_singular: 'Author',
  description:
    'Create authors here that can be referenced from guides and design pattern pages',
  folder: sitePath('src/data/authors'),
  create: true,
  identifier_field: 'name',
  extension: 'yml',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    {
      label: 'Role',
      name: 'role',
      widget: 'string',
    },
    {
      label: 'Avatar',
      name: 'avatar',
      widget: 'image',
    },
  ],
};
