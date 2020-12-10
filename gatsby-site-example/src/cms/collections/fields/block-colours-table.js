import { getSimpleRichTextField } from './simple-rich-text';

const field = {
  name: 'coloursTableBlock',
  label: 'Colours Table',
  widget: 'list',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    {
      label: 'Hex Code',
      name: 'hex',
      widget: 'string',
    },
    getSimpleRichTextField({
      name: 'usedFor',
      label: 'Used For',
      required: false,
    }),
  ],
};

export const getColourTableBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
