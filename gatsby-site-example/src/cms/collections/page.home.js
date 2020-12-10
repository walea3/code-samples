import { sitePath } from '../util';
import quote from './fields/quote';
import colourHeadings from './fields/heading-mix-colour';
import responsiveImage from './fields/responsive-image';
import { getFeatureBlockField } from './fields/feature-block';
import { getSimpleRichTextField } from './fields/simple-rich-text';

export default {
  file: sitePath('src/pages/index.md'),
  label: 'Home',
  name: 'home',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'home-page',
    },
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        colourHeadings,
        getSimpleRichTextField({ label: 'Body', name: 'body' }),
        responsiveImage,
      ],
    },
    {
      label: 'Sections',
      name: 'sections',
      widget: 'list',
      types: [
        quote,
        getFeatureBlockField({
          label: 'Experience language',
          name: 'experienceLang',
        }),
        {
          name: 'designSystem',
          label: 'Design system',
          widget: 'object',
          fields: [
            { label: 'Heading', name: 'heading', widget: 'string' },
            getSimpleRichTextField({ label: 'Body', name: 'body' }),
            {
              label: 'Benefits',
              name: 'benefits',
              widget: 'list',
              fields: [
                { label: 'Heading', name: 'heading', widget: 'string' },
                getSimpleRichTextField({ label: 'Body', name: 'body' }),
                { label: 'Image', name: 'image', widget: 'image' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "What's next",
      name: 'whatsNext',
      widget: 'object',
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string', default: "What's next?" },
        {
          label: 'Next',
          name: 'links',
          widget: 'list',
          fields: [
            { label: 'Heading', name: 'heading', widget: 'string' },
            getSimpleRichTextField({ label: 'Body', name: 'body' }),
            { label: 'Link', name: 'link', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' },
          ],
        },
      ],
    },
  ],
};
