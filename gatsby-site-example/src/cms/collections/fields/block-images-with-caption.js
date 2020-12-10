const field = {
  name: 'imagesWithCaption',
  label: 'Images with Caption',
  widget: 'object',
  fields: [
    {
      label: 'Images',
      label_singular: 'Image',
      name: 'images',
      widget: 'list',
      default: [],
      fields: [
        {
          label: 'Caption',
          name: 'caption',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
      ],
    },
  ],
};

export default field;
