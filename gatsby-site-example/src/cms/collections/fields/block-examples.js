import _startCase from 'lodash/startCase';
import { exampleRenderers } from '../../../components/renderers';
import { getSimpleRichTextField } from './simple-rich-text';

const componentOptions = Object.keys(exampleRenderers).map((value) => ({
  value,
  label: _startCase(value),
}));

const field = {
  name: 'examplesBlock',
  label: 'Interactive Examples',
  widget: 'list',
  fields: [
    {
      name: 'component',
      label: 'Component',
      widget: 'select',
      options: componentOptions,
    },
    { name: 'data', label: 'Example data', widget: 'text', required: false },
    {
      label: 'Heading',
      name: 'heading',
      widget: 'string',
      required: false,
    },
    getSimpleRichTextField({
      label: 'Description',
      name: 'description',
      required: false,
    }),
    {
      label: 'Is Large?',
      name: 'isLarge',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Center align?',
      name: 'center',
      widget: 'boolean',
      default: true,
    },
  ],
};

export const getRulesListBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
