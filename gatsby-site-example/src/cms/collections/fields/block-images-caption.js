const field = {
  name: 'imagesCaptionBlock',
  label: 'Images with Caption',
  widget: 'list',
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Caption',
      name: 'caption',
      widget: 'string',
      required: false,
    },
    {
      label: 'Is Borderless?',
      name: 'borderless',
      widget: 'boolean',
      default: false,
    },
    {
      label: 'Is Large?',
      name: 'isLarge',
      widget: 'boolean',
      default: false,
    },
  ],
};

export const getImageBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
