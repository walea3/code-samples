import { getMixColourHeadingField } from './heading-mix-colour';
import { getAuthorField } from './author';

const field = {
  name: 'quote',
  label: 'Quote',
  widget: 'object',
  fields: [
    getMixColourHeadingField({
      label: 'Quote body',
      name: 'body',
    }),
    getAuthorField({
      label: 'Quote author',
    }),
  ],
};

export const getQuoteField = (props) => ({
  ...field,
  ...props,
});

export default field;
