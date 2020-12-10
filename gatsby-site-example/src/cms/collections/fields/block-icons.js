import _startCase from 'lodash/startCase';
import { icons } from '@nel-ui/react';

const iconOptions = Object.keys(icons).map((value) => ({
  value,
  label: _startCase(value),
}));

const field = {
  name: 'iconsBlock',
  label: 'Icons',
  widget: 'list',
  fields: [
    {
      label: 'Icon',
      name: 'name',
      widget: 'select',
      options: iconOptions,
    },
    {
      label: 'Is Button?',
      name: 'button',
      widget: 'boolean',
      default: false,
    },
  ],
};

export const getIconsBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
