import React from 'react';

import { action } from '@storybook/addon-actions';

import { Dropdown, Field, Input, Textarea, Tooltip } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

import { getOptions } from './fixtures';

const description =
  'We use a descriptor to provide useful information to help the members fill out an input field, this is to avoid use of placeholder text and tool tips';

export default {
  title: 'Components/Form/Field',
  component: Field,
  parameters: { nel: { col: { w600: 8 } } },
};

export const states = () => (
  <Example title="in states">
    <Field id="with-label" label="Field with label (basic)" data-ref="basic">
      {(props) => <Input data-ref="basic" {...props} size={15} />}
    </Field>

    <Field
      data-ref="fieldOptional"
      id="with-label-optional"
      label="What is your favorite colour?"
      required={false}
    >
      {(props) => <Input {...props} size={15} />}
    </Field>

    <Field
      data-ref="optionalCustomText"
      id="with-label-optional-customText"
      label="Custom optional label"
      required={false}
      optionalText="(Dewisol)"
    >
      {(props) => <Input {...props} size={15} />}
    </Field>

    <Field
      {...{ description }}
      id="with-label-desc"
      label="Field with description"
      data-ref="desc"
    >
      {(props) => <Input data-ref="desc" {...props} size={15} />}
    </Field>

    <Field
      data-ref="fieldTooltip"
      id="with-tooltip"
      label="Field with tooltip"
      tooltip={
        <Tooltip id="with-tooltip-help" spacing="left" aria-label="Help">
          Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
          consectetur magna esse.
        </Tooltip>
      }
    >
      {(props) => <Input {...props} size={15} />}
    </Field>

    <Field
      data-ref="fieldTooltipOptional"
      id="with-tooltip-label-optional"
      label="Field optional with tooltip"
      tooltip={
        <Tooltip id="with-tooltip-label-optional-help" spacing="left" aria-label="Help">
          Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
          consectetur magna esse.
        </Tooltip>
      }
      required={false}
    >
      {(props) => <Input {...props} size={15} />}
    </Field>

    <Field id="field-dropdown" data-ref="dropdown" label="Field - Dropdown">
      {({ inline, ...props }) => (
        <>
          <Dropdown
            {...props}
            onChange={action('onChange')}
            value="option 1"
            options={getOptions(3, 'field-dropdown')}
          />
        </>
      )}
    </Field>
    <Field
      {...{ description }}
      id="with-label-desc-warning"
      label="Field with Warning Alerts"
      warnings="The purpose is to warn"
      data-ref="warning"
    >
      {(props) => <Input data-ref="warning" {...props} size={55} />}
    </Field>
    <Field
      {...{ description }}
      id="with-label-desc-error"
      label="Field with Error Alerts (which supersedes Warning Alerts)"
      warnings="The purpose is to warn"
      errors="The purpose is to stop, display information about the error and how to fix it"
      data-ref="error"
    >
      {(props) => <Input data-ref="error" {...props} size={45} />}
    </Field>

    <Field
      {...{ description }}
      alertOptions={{ label: 'Custom error label', silent: true, type: 'error' }}
      id="optional-textarea-label-desc-error"
      label="Field with multiple Error Alerts and has a long text with optional label"
      errors={[
        'The purpose is to stop',
        'It tells the user where errors have occured on the page',
      ]}
      data-ref="optionalTextarea.error"
      required={false}
    >
      {(props) => <Textarea {...props} cols={50} />}
    </Field>
  </Example>
);
