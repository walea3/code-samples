const field = {
  label: 'Rule Type',
  name: 'ruleType',
  widget: 'select',
  default: 'do',
  options: [
    { label: 'Do', value: 'do' },
    { label: "Don't", value: 'dont' },
    { label: 'Consider', value: 'consider' },
  ],
};

export const getRuleTypeField = (props) => ({
  ...field,
  ...props,
});

export default field;
