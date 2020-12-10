import cx from 'classnames';
import React from 'react';

import {
  Message,
  MessageProps,
  MessageVariants,
  ProminenceVariants,
} from '@nel-ui/message-react';

import FormStyles from './FormStyles';

export interface FormAlertMessageProps extends MessageProps {
  /**
   * Alert style
   * @default error
   */
  variant: MessageVariants.ERROR | MessageVariants.WARNING;
}

export const FormAlertMessage = ({
  inlineFirstChild = false,
  prominence = ProminenceVariants.HIGH,
  variant = MessageVariants.ERROR,
  ...props
}: FormAlertMessageProps) => (
  <FormStyles>
    {({ classes }) => (
      <Message
        role="alert"
        {...props}
        className={cx(classes.formAlertMessage, classes[`${variant}FormAlertMessage`], {
          [classes.prominent]: prominence === ProminenceVariants.HIGH,
        })}
        inlineFirstChild={inlineFirstChild}
        prominence={prominence}
        variant={variant}
      />
    )}
  </FormStyles>
);

FormAlertMessage.displayName = 'FormAlertMessage';
