import { getSimpleRichTextField } from './simple-rich-text';

const field = {
  name: 'imagesTitleDescBlock',
  label: 'Images with Title & Description',
  widget: 'list',
  fields: [
    {
      label: 'Heading',
      name: 'heading',
      widget: 'string',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    getSimpleRichTextField({
      label: 'Description',
      name: 'description',
      required: false,
    }),
    {
      label: 'Is Large?',
      name: 'isLarge',
      widget: 'boolean',
      default: false,
    },
    {
      label: 'Image first?',
      name: 'hasImageFirst',
      widget: 'boolean',
      default: false,
    },
  ],
};

export const getImagesBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
