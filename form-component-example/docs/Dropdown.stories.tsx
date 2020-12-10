import React from 'react';

import { action } from '@storybook/addon-actions';

import { Dropdown } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

import { DropdownContainer } from './DropdownContainer';
import { getOptions } from './fixtures';

export default {
  title: 'Components/Form/Dropdown',
  component: Dropdown,
  parameters: { nel: { col: { w480: 10, w600: 8 } } },
};

export const states = () => (
  <Example title="Dropdown">
    <Dropdown
      id="dropdown1"
      options={getOptions(3, 'dropdown1')}
      placeholder="when normal"
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      data-ref="normal"
    />
    <Dropdown
      id="dropdown2"
      options={getOptions(3, 'dropdown2')}
      placeholder="when disabled - Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      onChange={action('onChange')}
      disabled
      data-ref="disabled"
    />
    <Dropdown
      id="dropdown3"
      options={getOptions(3, 'dropdown3')}
      placeholder="with warning alert"
      onChange={action('onChange')}
      alert="warning"
      data-ref="warning"
    />
    <Dropdown
      id="dropdown4"
      options={getOptions(3, 'dropdown4')}
      placeholder="with error alert"
      onChange={action('onChange')}
      alert="error"
      data-ref="error"
    />
  </Example>
);

export const sizing = () => (
  <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-start' }}>
    <Dropdown
      id="dropdown1"
      options={getOptions(3, 'dropdown1', false)}
      placeholder="Select"
      onChange={action('onChange')}
      data-ref="sizing"
    />
    <Dropdown
      id="dropdown2"
      options={getOptions(3, 'dropdown2', true, true)}
      placeholder="Select"
      onChange={action('onChange')}
      data-ref="sizing"
    />
    <Dropdown
      id="dropdown3"
      options={getOptions(3, 'dropdown3')}
      placeholder="Select"
      onChange={action('onChange')}
      data-ref="sizing"
    />
  </div>
);

export const withDefaultSelection = () => (
  <>
    <Dropdown
      id="dropdown5"
      options={getOptions(3, 'dropdown5')}
      value={getOptions(3, 'dropdown5')[0].value}
      placeholder="Select"
      onChange={action('onChange')}
      data-ref="first"
    />
    <Dropdown
      id="dropdown6"
      options={getOptions(10, 'dropdown6')}
      value={getOptions(10, 'dropdown6')[5].value}
      placeholder="Select"
      onChange={action('onChange')}
      data-ref="second"
    />
    <Dropdown
      id="dropdown7"
      options={getOptions(20, 'dropdown7')}
      value={getOptions(20, 'dropdown7')[19].value}
      placeholder="Select"
      onChange={action('onChange')}
      data-ref="third"
    />
  </>
);

export const behaviour = () => (
  <div style={{ display: 'inline-flex', maxWidth: '100%', flexFlow: 'row wrap' }}>
    <DropdownContainer
      id="dropdownTop"
      title="top"
      style={{ alignItems: 'flex-start' }}
    />
    <DropdownContainer id="dropdownCenter" title="center" />
    <DropdownContainer
      id="dropdownBottom"
      title="bottom"
      style={{ alignItems: 'flex-end' }}
    />
  </div>
);

export const labeled = () => (
  <Dropdown
    label="Days of the week"
    id="dropdown8"
    options={getOptions(20, 'dropdown8')}
    value={getOptions(20, 'dropdown8')[19].value}
    placeholder="Select"
    onChange={action('onChange')}
    data-ref="labeled"
  />
);
