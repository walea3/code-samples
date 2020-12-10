import sections from '../fields/flexible-content-section';
import { getSimpleRichTextField } from '../fields/simple-rich-text';

const commonFields = [
  {
    label: 'Template Key',
    name: 'templateKey',
    widget: 'hidden',
    default: 'design-system',
  },
  { label: 'Title', name: 'title', widget: 'string' },
  getSimpleRichTextField({ label: 'Lead', name: 'lead' }),
  {
    label: 'In development?',
    name: 'inDevelopment',
    widget: 'boolean',
    default: false,
  },
  {
    label: 'Thumbnail',
    name: 'thumbnail',
    widget: 'image',
    default: '/img/blank_thumbnail.png',
  },
];

export const platformlessFields = [...commonFields, sections];

export const platformFields = [
  ...commonFields,
  {
    name: 'web',
    label: 'Web',
    widget: 'object',
    fields: [sections, { name: 'title', widget: 'hidden', default: 'Web' }],
  },
  {
    name: 'ios',
    label: 'iOS',
    widget: 'object',
    fields: [sections, { name: 'title', widget: 'hidden', default: 'iOS' }],
  },
  {
    name: 'android',
    label: 'Android',
    widget: 'object',
    fields: [sections, { name: 'title', widget: 'hidden', default: 'Android' }],
  },
  {
    name: 'colleague',
    label: 'Colleague',
    widget: 'object',
    fields: [sections, { name: 'title', widget: 'hidden', default: 'Colleague' }],
  },
];
