const field = {
  name: 'responsiveImage',
  label: 'Image',
  widget: 'object',
  fields: [
    {
      label: 'Small view',
      name: 'sm',
      widget: 'image',
    },
    {
      label: 'Large view',
      name: 'lg',
      widget: 'image',
    },
  ],
};

export const getResponsiveImageField = (props) => ({
  ...field,
  ...props,
});

export default field;
