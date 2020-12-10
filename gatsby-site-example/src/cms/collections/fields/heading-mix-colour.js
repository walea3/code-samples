const field = {
  name: 'mixColourHeading',
  label: 'Heading with mixed colours',
  widget: 'list',
  fields: [
    { label: 'Text', name: 'text', widget: 'string' },
    { label: 'In red?', name: 'isRed', widget: 'boolean', required: false },
  ],
};

export const getMixColourHeadingField = (props) => ({
  ...field,
  ...props,
});

export default field;
