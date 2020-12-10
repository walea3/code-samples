import ruleType from './rule-type';
import { getSimpleRichTextField } from './simple-rich-text';

const field = {
  name: 'rulesImageBlock',
  label: 'Rules with Image',
  widget: 'list',
  fields: [
    ruleType,
    {
      label: 'Label',
      name: 'label',
      widget: 'string',
      required: false,
    },
    getSimpleRichTextField({
      label: 'Rule',
      name: 'rule',
    }),
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Is Large?',
      name: 'isLarge',
      widget: 'boolean',
      default: false,
    },
  ],
};

export const getRulesBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
