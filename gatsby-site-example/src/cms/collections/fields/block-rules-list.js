import ruleType from './rule-type';
import { getSimpleRichTextField } from './simple-rich-text';

const field = {
  name: 'rulesListBlock',
  label: 'Rules List',
  widget: 'list',
  fields: [
    ruleType,
    {
      label: 'Label',
      name: 'label',
      widget: 'string',
      required: false,
    },
    {
      name: 'items',
      label: 'Items',
      widget: 'list',
      field: getSimpleRichTextField({
        label: 'Rule',
        name: 'rule',
      }),
    },
    {
      label: 'Is Large?',
      name: 'isLarge',
      widget: 'boolean',
      default: false,
    },
  ],
};

export const getRulesListBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
