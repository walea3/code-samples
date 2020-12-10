import React from 'react';

import { Icon, Input, Text } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

export default { title: 'Components/Form/Input', component: Input };

export const states = () => (
  <Example title="in states" data-ref="input.states">
    <Input id="normal" defaultValue="when normal" data-ref="normal" />
    <Input id="disabled" defaultValue="when disabled" disabled data-ref="disabled" />
    <Input
      id="warning"
      defaultValue="with warning alert"
      alert="warning"
      data-ref="warning"
    />
    <Input id="error" defaultValue="with error alert" alert="error" data-ref="error" />
  </Example>
);

export const prefixSuffix = () => {
  const prefixSuffixProps = {
    defaultValue: '1024.00',
    type: 'number',
  };

  return (
    <Example title="with prefix or suffix" data-ref="input.prefix.suffix">
      <Input
        {...prefixSuffixProps}
        data-ref="prefixAsString"
        id="prefixAsString"
        prefix="£"
      />

      <Input
        {...prefixSuffixProps}
        data-ref="suffixAsString"
        id="suffixAsString"
        suffix="per month"
      />

      <Input
        {...prefixSuffixProps}
        data-ref="prefixAndSuffixAsNode"
        id="prefixAndSuffixAsNode"
        prefix={<strong>£</strong>}
        suffix={<strong>per month</strong>}
      />
    </Example>
  );
};

export const characterSizing = () => {
  const characterSizingProps = {
    size: 2,
    type: 'number',
  };

  return (
    <Example title="with size">
      <div style={{ width: '250' }}>
        <Example title="2 character width">
          <Input
            {...characterSizingProps}
            id="sizing-12"
            defaultValue="12"
            size={2}
            data-ref="sizing"
          />
        </Example>
        <Example title="3 character width">
          <Input
            {...characterSizingProps}
            id="sizing-123"
            defaultValue="123"
            size={3}
            data-ref="sizing"
          />
        </Example>
        <Example title="4 character width">
          <Input
            {...characterSizingProps}
            id="sizing-1234"
            defaultValue="1234"
            size={4}
            data-ref="sizing"
          />
        </Example>
        <Example title="5 character width">
          <Input
            {...characterSizingProps}
            id="sizing-12345"
            defaultValue="12345"
            size={5}
            data-ref="sizing"
          />
        </Example>
        <Example title="6 character width">
          <Input
            {...characterSizingProps}
            id="sizing-123456"
            defaultValue="123456"
            size={6}
            data-ref="sizing"
          />
        </Example>
        <Example title="max character width">
          <Input
            {...characterSizingProps}
            id="sizing-1234567"
            defaultValue="1234567"
            size={122}
            data-ref="sizing"
          />
        </Example>
      </div>
    </Example>
  );
};

export const labeled = () => (
  <>
    <Example title="with label">
      <Example>
        <Input id="with-label" label="Input Label" data-ref="sublabel" />
      </Example>
    </Example>

    <Example title="inline with label">
      <Example inline>
        <Input id="short-with-label" label="Short" size={2} inline />
      </Example>

      <Example inline>
        <Input
          id="short-with-long-label"
          label="Short With Longer Label"
          size={2}
          inline
        />
      </Example>

      <Example>
        <Input id="long-with-label" label="Long" size={20} inline />
      </Example>
    </Example>
  </>
);

export const inputTypes = () => (
  <Example title="example input types - WIP">
    <Example>
      <Input
        inline
        id="inputType.email"
        type="email"
        defaultValue="firstname.lastname"
        suffix="@noop.co.uk"
        data-ref="type"
      />
    </Example>

    <Example>
      <Input
        inline
        id="inputType.password"
        type="password"
        defaultValue="Password"
        alert="warning"
        suffix={
          <>
            <Icon key="icon" name="info-24-warning" />
            <Text key="status" style={{ paddingLeft: 6 }}>
              Not Secure
            </Text>
          </>
        }
      />
    </Example>

    <Example>
      <Input
        id="inputType.number"
        inline
        type="number"
        prefix="£"
        defaultValue="0.00"
        suffix="per month"
      />
    </Example>

    <Example>
      <Input
        id="inputType.url"
        inline
        type="url"
        defaultValue="noop.co.uk"
        prefix="https://"
      />
    </Example>

    <Example>
      <Input
        id="inputType.tel"
        inline
        type="tel"
        defaultValue="1793 213 897"
        prefix="+44"
      />
    </Example>

    <Example>
      <Input id="inputType.month" inline type="month" defaultValue="Card expiry" />
    </Example>

    <Example>
      <Input id="inputType.date" inline type="date" defaultValue="date of birth" />
    </Example>

    <Example>
      <Input
        id="inputType.file"
        inline
        type="file"
        prefix="Upload file"
        suffix="max. 5MB"
        style={{ maxWidth: 1, opacity: 0 }}
      />
    </Example>
  </Example>
);
