import { sitePath } from '../util';
import responsiveImage from './fields/responsive-image';
import blockParagraphImageGrid from './fields/block-paragraph-image-grid';
import blockImagesWithCaption from './fields/block-images-with-caption';

const RichText = {
  label: 'Rich Text',
  name: 'richText',
  widget: 'object',
  fields: [
    {
      label: 'Content',
      name: 'content',
      widget: 'markdown',
    },
  ],
};

const Rules = {
  label: 'Rules List',
  name: 'rulesList',
  widget: 'object',
  fields: [
    {
      label: 'Lists',
      label_singular: 'List',
      name: 'lists',
      widget: 'list',
      default: [],
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          default: 'Aim to:',
        },
        {
          label: 'Icon',
          name: 'icon',
          widget: 'select',
          default: 'do',
          options: [{ label: 'Do', value: 'do' }, { label: "Don't", value: 'dont' }],
        },
        {
          label: 'Items',
          label_singular: 'Item',
          name: 'items',
          widget: 'list',
          default: [],
          field: { label: 'Text', name: 'text', widget: 'string' },
        },
      ],
    },
  ],
};

const RulesBlock = {
  label: 'Rules Block',
  name: 'rulesBlock',
  widget: 'object',
  fields: [
    {
      label: 'Rules',
      label_singular: 'Rule',
      name: 'rules',
      widget: 'list',
      default: [],
      fields: [
        {
          label: 'Label',
          name: 'label',
          widget: 'string',
          default: 'Do:',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
        },
        {
          label: 'Type',
          name: 'type',
          widget: 'select',
          default: 'do',
          options: [{ label: 'Do', value: 'do' }, { label: "Don't", value: 'dont' }],
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Is Large?',
          name: 'isLarge',
          widget: 'boolean',
          default: false,
        },
      ],
    },
  ],
};

export default {
  name: 'guide',
  label: 'Guides',
  label_singular: 'Guide',
  description:
    'Guides provide the tools and techniques to help us create user-centred experiences. They include research, resources and guidance, which we can use to make informed decisions.',
  folder: sitePath('src/pages/guides'),
  create: true,
  extension: 'yml',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Authors',
      name: 'authors',
      widget: 'relation',
      collection: 'author',
      multiple: true,
      searchFields: ['name'],
      valueField: 'name',
      default: [],
    },
    {
      label: 'Publish Date',
      name: 'publishDate',
      widget: 'date',
    },
    {
      label: 'Description (for guide list)',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Thumbnail',
      name: 'thumbnail',
      widget: 'image',
    },
    {
      ...responsiveImage,
      label: 'Hero Image',
      name: 'heroImage',
    },
    {
      label: 'Opening Paragraph',
      name: 'mainParagraph',
      widget: 'markdown',
    },
    {
      label: 'Sections',
      label_singular: 'Section',
      name: 'sections',
      widget: 'list',
      default: [],
      fields: [
        {
          label: 'Heading',
          name: 'heading',
          widget: 'string',
        },
        {
          label: 'Blocks',
          label_singular: 'Block',
          name: 'blocks',
          widget: 'list',
          default: [],
          types: [
            RichText,
            Rules,
            RulesBlock,
            blockImagesWithCaption,
            blockParagraphImageGrid,
          ],
        },
      ],
    },
  ],
};
