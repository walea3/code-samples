const field = {
  name: 'paragraphImageGrid',
  label: 'Paragraph Image Grid',
  widget: 'object',
  fields: [
    {
      label: 'Paragraph Images',
      label_singular: 'Paragraph Image',
      name: 'paragraphImages',
      widget: 'list',
      default: [],
      fields: [
        {
          label: 'Heading',
          name: 'heading',
          widget: 'string',
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
        },
        {
          label: 'Is full width?',
          name: 'isFullWidth',
          widget: 'boolean',
          default: false,
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
