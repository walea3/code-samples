const field = {
  name: 'cabernetHeadingBlock',
  label: 'Cabernet Heading',
  widget: 'string',
};

export const getHeadingField = (props) => ({
  ...field,
  ...props,
});

export default field;
