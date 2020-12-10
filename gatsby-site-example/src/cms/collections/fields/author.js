const field = {
  name: 'author',
  label: 'Author',
  widget: 'object',
  fields: [
    { label: 'Author avatar', name: 'avatar', widget: 'image' },
    { label: 'Author name', name: 'name', widget: 'string' },
    { label: 'Author title', name: 'title', widget: 'string' },
  ],
};

export const getAuthorField = (props) => ({
  ...field,
  ...props,
});

export default field;
