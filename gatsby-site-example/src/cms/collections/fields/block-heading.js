const field = {
  name: 'headingBlock',
  label: 'Heading',
  widget: 'object',
  fields: [
    { name: 'text', label: 'Text', widget: 'string' },
    {
      name: 'level',
      label: 'Level',
      widget: 'select',
      options: [
        { label: 'h2', value: '2' },
        { label: 'h3', value: '3' },
        { label: 'h4', value: '4' },
      ],
      default: '3',
    },
  ],
};

export const getHeadingField = (props) => ({
  ...field,
  ...props,
});

export default field;
