import cx from 'classnames';
import React from 'react';

import { getDataRef } from '@nel-ui/js-helpers';
import { UL } from '@nel-ui/list-react';
import { MessageVariants, ProminenceVariants } from '@nel-ui/message-react';

import { FormAlertMessage, FormAlertMessageProps } from './FormAlertMessage';
import FormStyles from './FormStyles';

export interface FieldAlertsProps extends Omit<FormAlertMessageProps, 'prominence'> {
  alerts: React.ReactNode[];
  silent?: boolean;
}

export const FieldAlerts = ({
  alerts,
  className,
  'data-ref': dataRef,
  id,
  silent = false,
  variant,
  ...props
}: FieldAlertsProps) => {
  const alertLength = alerts.length;
  if (!alertLength) return null;

  const hasMultipleMessages = alertLength > 1;

  return (
    <FormStyles>
      {({ classes }) => (
        <FormAlertMessage
          className={cx(className, classes[`${variant}Alert`])}
          contentId={id}
          data-ref={getDataRef(dataRef, 'fieldAlerts')}
          role={silent ? undefined : 'alert'}
          variant={variant === MessageVariants.WARNING ? variant : MessageVariants.ERROR}
          {...props}
          inlineFirstChild={!hasMultipleMessages}
          prominence={ProminenceVariants.LOW}
        >
          {hasMultipleMessages ? (
            <UL>
              {alerts.map((alert, i) => (
                <UL.Item
                  key={`alert-${i}`}
                  data-ref={getDataRef(dataRef, `fieldAlert-${i}`)}
                >
                  {alert}
                </UL.Item>
              ))}
            </UL>
          ) : (
            alerts
          )}
        </FormAlertMessage>
      )}
    </FormStyles>
  );
};

FieldAlerts.displayName = 'Field.Alerts';
