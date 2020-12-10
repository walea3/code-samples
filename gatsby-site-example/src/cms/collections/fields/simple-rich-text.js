const field = {
  name: 'richtext',
  label: 'Rich Text',
  widget: 'markdown',
  buttons: ['bold', 'italic', 'link', 'bulleted-list', 'numbered-list'],
};

export const getSimpleRichTextField = (props) => ({
  ...field,
  ...props,
});

export default field;
