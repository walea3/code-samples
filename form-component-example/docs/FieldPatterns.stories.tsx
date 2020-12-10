import React from 'react';

import { action } from '@storybook/addon-actions';

import { getDataRef } from '@nel-ui/js-helpers';
import {
  Checkbox,
  CheckboxGroup,
  Dropdown,
  Field,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  TextButton,
  Tooltip,
} from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

import { getOptions } from './fixtures';
import { Password, PasswordProps } from './utils';

const description =
  'We use a descriptor to provide useful information to help the members fill out an input field, this is to avoid use of placeholder text and tool tips';

const PasswordExample = ({ 'data-ref': dataRef, ...props }: PasswordProps) => (
  <Password
    data-ref={getDataRef(dataRef, 'passwordField')}
    defaultValue="N3!-pa33w0rd"
    onChange={action('password => action')}
    {...props}
  />
);

export default {
  title: 'Components/Form/Field/Patterns',
  parameters: { nel: { col: { w600: 8 } } },
};

export const date = () => (
  <Example>
    <Field id="input-day-month-year" label="Input - Day/Month/Year" fieldset inline>
      {({ id, ...props }) => (
        <>
          <Input {...props} id={`${id}-1`} label="Day" size={2} data-ref="date.dmy" />
          <Input {...props} id={`${id}-2`} label="Month" size={2} />
          <Input {...props} id={`${id}-3`} label="Year" size={4} />
        </>
      )}
    </Field>

    <Field id="input-day-month" label="Input - Day/Month" fieldset inline>
      {({ id, ...props }) => (
        <>
          <Input {...props} id={`${id}-1`} label="Day" size={2} data-ref="date.dm" />
          <Input {...props} id={`${id}-2`} label="Month" size={2} />
        </>
      )}
    </Field>

    <Field id="input-month-year" label="Input - Month/Year" fieldset inline>
      {({ id, ...props }) => (
        <>
          <Input {...props} id={`${id}-1`} label="Month" size={2} data-ref="date.my" />
          <Input {...props} id={`${id}-2`} label="Year" size={4} />
        </>
      )}
    </Field>
  </Example>
);
date.story = { parameters: null };

export const fieldSet = () => (
  <Example>
    <Field id="as-fieldset-input" label="Field set - Input" fieldset>
      {({ id, ...props }) => (
        <>
          <Input {...props} data-ref="input" id={`${id}-1`} label="Input 1" size={2} />
          <Input {...props} data-ref="input" id={`${id}-2`} label="Input 2" size={4} />
          <Input
            {...props}
            data-ref="fieldset.input.prefix"
            id={`${id}-3`}
            label="Input 3 (prefix)"
            prefix="£"
            size={4}
          />
          <Input
            {...props}
            data-ref="fieldset.input.suffix"
            id={`${id}-4`}
            label="Input 4 (suffix)"
            suffix="years"
            size={4}
          />
        </>
      )}
    </Field>

    <Field
      id="as-fieldset-textarea"
      label="Field set - Textarea"
      fieldset
      data-ref="fieldset.textarea"
    >
      {({ id, ...props }) => (
        <>
          <Textarea {...props} id={`${id}-1`} label="Textarea 1" cols={75} />
          <Textarea
            {...props}
            id={`${id}-2`}
            label="Textarea 2 (custom width)"
            cols={75}
            style={{ width: '50%' }}
          />
        </>
      )}
    </Field>

    <Field
      id="optional-fieldset"
      label="Field set - Checkbox"
      fieldset
      data-ref="optionalCheckbox"
      required={false}
      tooltip={
        <Tooltip id="optional-fieldset-help" spacing="left" aria-label="Help">
          Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
          consectetur magna esse.
        </Tooltip>
      }
    >
      {({ id, ...props }) => (
        <>
          <Checkbox
            {...props}
            id={`${id}-a`}
            name="check-answer"
            value="a"
            label="Option A"
            data-ref="field-a"
          />
          <Checkbox
            {...props}
            id={`${id}-b`}
            name="check-answer"
            value="b"
            label="Option B"
            data-ref="field-b"
          />
          <Checkbox
            {...props}
            id={`${id}-c`}
            name="check-answer"
            value="c"
            label="Option C"
            data-ref="field-c"
          />
        </>
      )}
    </Field>

    <Field
      id="as-fieldset-radio"
      label="Field set - Radio"
      fieldset
      data-ref="radio"
      tooltip={
        <Tooltip id="as-fieldset-radio-help" spacing="left" aria-label="Help">
          Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
          consectetur magna esse.
        </Tooltip>
      }
    >
      {({ id, ...props }) => (
        <>
          <Radio
            {...props}
            id={`${id}-yes`}
            name="radio-answer"
            value="yes"
            label="Yes"
            data-ref="field-yes"
          />
          <Radio
            {...props}
            id={`${id}-no`}
            name="radio-answer"
            value="no"
            label="No"
            data-ref="field-no"
          />
          <Radio
            {...props}
            id={`${id}-maybe`}
            name="radio-answer"
            value="maybe"
            label="Maybe"
            data-ref="field-maybe"
          />
        </>
      )}
    </Field>

    <Field
      id="as-fieldset-input-dropdown"
      label="Field set - Input + Dropdown"
      fieldset
      tooltip={
        <Tooltip id="as-fieldset-input-dropdown-help" spacing="left" aria-label="Help">
          Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
          consectetur magna esse.
        </Tooltip>
      }
    >
      {({ id, ...props }) => (
        <>
          <Input {...props} id={`${id}-1`} size={30} label="Input" />
          <Dropdown
            label="Dropdown"
            {...props}
            id={`${id}-2`}
            placeholder="Select"
            onChange={action('onChange')}
            value="option 2"
            options={getOptions(3, 'as-fieldset-input-dropdown')}
          />
        </>
      )}
    </Field>
  </Example>
);

export const inlineFieldSet = () => (
  <Example>
    <Field
      id="as-inline-fieldset-input"
      label="Inline field set - Input"
      fieldset
      inline
      data-ref="inline.input"
    >
      {({ id, ...props }) => (
        <>
          <Input data-ref="inline" {...props} id={`${id}-1`} label="Input 1" size={4} />
          <Input data-ref="inline" {...props} id={`${id}-2`} label="Input 2" size={4} />
        </>
      )}
    </Field>

    <Field
      id="as-inline-fieldset-dropdown"
      label="Inline field set - Dropdown"
      fieldset
      inline
      data-ref="inline.dropdown"
    >
      {({ id, inline, ...props }) => (
        <>
          <Dropdown
            data-ref="inline"
            {...props}
            id={`${id}-1`}
            label="Option 1"
            options={getOptions(10, 'dropdown-inline-1')}
            value={getOptions(10, 'dropdown-inline-1')[0].value}
            onChange={action('onChange')}
          />
          <Dropdown
            data-ref="inline"
            {...props}
            id={`${id}-2`}
            label="Option 2"
            options={getOptions(10, 'dropdown-inline-2')}
            value={getOptions(10, 'dropdown-inline-2')[0].value}
            onChange={action('onChange')}
          />
        </>
      )}
    </Field>

    <Field
      id="as-inline-fieldset"
      label="Inline Field set - CheckboxGroup"
      fieldset
      inline
      data-ref="inline.checkbox"
    >
      {({ id, ...props }) => (
        <CheckboxGroup
          {...props}
          data-ref="inlineCheckboxGroup"
          name="inline-checkboxgroup"
          onChange={action('inline-checkboxgroup')}
          items={[
            {
              id: `${id}-a`,
              value: 'a',
              label: 'Option A extra length which wraps over multiple lines',
            },
            {
              id: `${id}-b`,
              value: 'b',
              label: 'Option B',
            },
            {
              id: `${id}-c`,
              value: 'c',
              label: 'Option C',
            },
          ]}
        />
      )}
    </Field>

    <Field
      id="as-inline-fieldset-radio"
      description="We use a descriptor to provide useful information to help the members fill out an input field, this is to avoid use of placeholder text and tool tips"
      label="Inline Field set - Radio"
      fieldset
      inline
      data-ref="inline.radio"
    >
      {({ id, ...props }) => (
        <RadioGroup
          {...props}
          name="inline-radiogroup"
          data-ref="inlineRadioGroup"
          onChange={action('inline-radiogroup')}
          items={[
            {
              id: `${id}-yes`,
              value: 'yes',
              label: 'Yes',
            },
            {
              id: `${id}-no`,
              value: 'no',
              label: 'No',
            },
            {
              id: `${id}-maybe`,
              value: 'maybe',
              label: 'Maybe',
            },
          ]}
        />
      )}
    </Field>
  </Example>
);

export const fieldSetWithSharedAlerts = () => (
  <Example>
    <Field
      id="as-inline-fieldset-input-shared-alert"
      label="Inline field set - Shared alert"
      errors={['Danger!']}
      fieldset
      inline
      data-ref="inline.input.shared.alert"
    >
      {({ id, ...props }) => (
        <>
          <Input {...props} id={`${id}-1`} label="Input 1" size={2} />
          <Input {...props} id={`${id}-2`} label="Input 2" size={2} />
          <Input {...props} id={`${id}-3`} label="Input 3" size={4} />
        </>
      )}
    </Field>

    <Field
      id="as-inline-fieldset-radio-shared-alert"
      label="Inline Field set - Radio w/ Shared alert"
      warnings={['Heads up!']}
      fieldset
      inline
      data-ref="inline.radio.shared.alert"
    >
      {({ id, ...props }) => (
        <>
          <Radio
            {...props}
            id={`${id}-yes`}
            name="radio-answer"
            value="yes"
            label="Yes"
          />
          <Radio {...props} id={`${id}-no`} name="radio-answer" value="no" label="No" />
          <Radio
            {...props}
            id={`${id}-maybe`}
            name="radio-answer"
            value="maybe"
            label="Maybe and it is a very long content which wraps over multiple lines"
          />
        </>
      )}
    </Field>
  </Example>
);

export const fieldSetWithIndividualAlerts = () => (
  <Example>
    <Field
      id="as-inline-fieldset-input-individual-alert"
      label="Inline field set - Individual alert"
      warnings={['Heads up!']}
      fieldset
      inline
      data-ref="inline.input.individual.alert"
    >
      {({ id, alert, ...props }) => (
        <>
          <Input {...props} id={`${id}-1`} label="Input 1" size={2} defaultValue="12" />
          <Input
            {...props}
            id={`${id}-2`}
            label="Input 2"
            size={2}
            defaultValue="32"
            alert={alert}
          />
          <Input {...props} id={`${id}-3`} label="Input 3" size={4} defaultValue="1920" />
        </>
      )}
    </Field>

    <Field
      id="as-fieldset-checkbox-individual-alert"
      label="Field set - Checkbox w/ Individual alert"
      errors={['Danger!']}
      fieldset
      data-ref="inline.checkbox.individual.alert"
    >
      {({ id, alert, ...props }) => (
        <>
          <Checkbox
            {...props}
            id={`${id}-a`}
            name="check-answer"
            value="a"
            label="Option A"
          />
          <Checkbox
            {...props}
            id={`${id}-b`}
            name="check-answer"
            value="b"
            label="Option B"
          />
          <Checkbox
            {...props}
            id={`${id}-c`}
            name="check-answer"
            value="c"
            label="Option C"
            alert={alert}
          />
        </>
      )}
    </Field>
  </Example>
);

export const fieldWithActions = () => (
  <>
    <Example title="3 actions">
      <Field
        {...{ description }}
        id="as-inline-fieldset-input-individual-alert"
        label="Inline field set - Individual alert other stuff and it is a very long label to check whether it is wrapping up"
        data-ref="basic.field.action"
        actions={{
          top: (
            <TextButton onClick={action('Top action')}>
              Top Action with a very long text to check whether it is wrapping up
            </TextButton>
          ),
          right: <TextButton onClick={action('Right action')}>Right Action</TextButton>,
          left: (
            <TextButton onClick={action('Left action')}>
              Left Action with a very long text to check whether it is wrapping up
            </TextButton>
          ),
        }}
      >
        {(props) => <Input {...props} data-ref="action" />}
      </Field>
    </Example>

    <Example title="Password example preferred action (top right)" data-ref="pwd.action">
      <PasswordExample
        id="password-default"
        name="password-default"
        data-ref="default"
        label="Enter your password"
        tooltip={
          <Tooltip id="password-default-help" spacing="left" aria-label="Help">
            Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
            consectetur magna esse.
          </Tooltip>
        }
        required={true}
      />
    </Example>

    <Example title="Password example 3 actions">
      <PasswordExample
        data-ref="allActions"
        id="password-all-options"
        name="password-all-options"
        label="Password (3 Options)"
        actions={{
          right: (
            <TextButton onClick={action('Forgotten password - action')}>
              Forgotten your password
            </TextButton>
          ),
          left: (
            <TextButton onClick={action('Contact Us - action?')}>
              Password advice
            </TextButton>
          ),
        }}
      />
    </Example>

    <Example title="Password example with errors">
      <PasswordExample
        data-ref="withErrors"
        id="password-error"
        name="password-error"
        label="Password - Error, with a very unneeded label length"
        tooltip={
          <Tooltip id="password-error-help" spacing="left" aria-label="Help">
            Consectetur ad et enim consectetur magna esse. Consectetur ad et enim
            consectetur magna esse.
          </Tooltip>
        }
        errors={['Password is incorrect']}
        actions={{
          left: (
            <TextButton onClick={action('Forgotten password - error action')}>
              Forgotten password
            </TextButton>
          ),
        }}
      />
    </Example>

    <Example title="Password example with warnings">
      <PasswordExample
        data-ref="withWarnings"
        id="password-warning"
        name="password-warning"
        label="Password - Warning"
        warnings={['Must be at least 5 characters', 'Must have a special character']}
        actions={{
          right: (
            <TextButton onClick={action('Contact us - warning action')}>
              Contact us?
            </TextButton>
          ),
        }}
      />
    </Example>
  </>
);
