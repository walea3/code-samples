import React from 'react';

import { FormAlertMessage, Link, MessageVariants, P, UL } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

export default {
  title: 'Components/Form/FormAlertMessage',
  component: FormAlertMessage,
  parameters: { full: true },
};

export const variants = () => (
  <>
    <Example title="Error Alert Message">
      <FormAlertMessage
        heading="There is a problem with your submission"
        data-ref="error.alert-box"
        variant={MessageVariants.ERROR}
      >
        <UL>
          <UL.Item>
            <Link href="#">Name is missing</Link>
          </UL.Item>
          <UL.Item>
            <Link href="#">Email is missing</Link>
          </UL.Item>
        </UL>
      </FormAlertMessage>
    </Example>

    <Example title="Warning Alert Message">
      <FormAlertMessage
        heading="Please be aware"
        variant="warning"
        data-ref="error.warning-box"
      >
        <UL>
          <UL.Item>
            Your application may take longer if you don't provide your NI number
          </UL.Item>
          <UL.Item>You will receive a confirmation code by email</UL.Item>
        </UL>
      </FormAlertMessage>
    </Example>

    <Example title="Inline Warning Alert Message">
      <FormAlertMessage
        heading="Please be aware"
        variant="warning"
        inlineFirstChild
        data-ref="inline.warning.alert-box"
      >
        <P>You could improve your answers</P>
      </FormAlertMessage>
    </Example>

    <Example title="Inline Error Alert Message">
      <FormAlertMessage
        heading="Error message"
        inlineFirstChild
        data-ref="inline.error.alert-box"
      >
        <P>There is a problem with your submission</P>
      </FormAlertMessage>
    </Example>
  </>
);
