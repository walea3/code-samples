import cx from 'classnames';
import React, { ReactNode } from 'react';

import { ensureArray, getDataRef } from '@nel-ui/js-helpers';
import { MessageVariants } from '@nel-ui/message-react';

import { FieldActions } from './FieldActions';
import { FieldAlerts, FieldAlertsProps } from './FieldAlerts';
import { FieldDescription } from './FieldDescription';
import { FieldLabel, FieldLabelProps } from './FieldLabel';
import FormStyles from './FormStyles';

interface AlertOptionsType {
  label?: ReactNode;
  silent?: boolean;
  type?: MessageVariants.ERROR | MessageVariants.WARNING;
}

export interface FieldControlProps {
  id: FieldProps['id'];
  inline?: FieldProps['inline'];
  alert?: MessageVariants.ERROR | MessageVariants.WARNING;
  // @NOTE pass data-label-id to field controls, for those that don't support label[for] attribute and not clash with aria-labelledby
  'data-label-id'?: FieldProps['aria-labelledby'];
  'aria-required': FieldProps['aria-required'];
  'aria-describedby'?: FieldProps['aria-describedby'];
  'aria-errormessage'?: FieldProps['aria-errormessage'];
}

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLFieldSetElement> {
  /**
   * Field ID
   * Used to label alerts for accessibility
   */
  id: string;
  'data-ref'?: string;

  /**
   * Field label
   */
  label: ReactNode;

  /**
   * Field description
   */
  description?: ReactNode;

  /**
   * Field required
   * @default true
   */
  required?: boolean;

  /**
   * Render as fieldset - ideal for controls with multiple labels
   *  i.e group of checkbox / radio, date inputs
   */
  fieldset?: boolean;

  /**
   * Render fieldset controls inline (only has effect if fieldset is true)
   *  i.e multi inputs, group of checkbox / radio
   */
  inline?: boolean;

  /**
   * Field tooltip
   * @description Extra help information
   */
  tooltip?: FieldLabelProps['tooltip'];

  /**
   * Field optionalText
   * @description Override to change text from default
   * @default "(Optional)"
   */
  optionalText?: string;

  /**
   * Field action(s)
   */
  actions?: {
    top?: ReactNode;
    right?: ReactNode;
    left?: ReactNode;
  };

  /**
   * Alert options
   */
  alertOptions?: AlertOptionsType;

  /**
   * Field errors
   */
  errors?: ReactNode | ReactNode[];

  /**
   * Label for field errors
   */
  errorLabel?: ReactNode;

  /**
   * Field warnings - superseded by any errors
   */
  warnings?: ReactNode | ReactNode[];

  /**
   * Label for field warnings
   */
  warningLabel?: ReactNode;

  /**
   * Render prop form field control
   * Field set accepts multiple rendered children
   */
  children(props: FieldControlProps): React.ReactElement<FieldControlProps>;
}

export const Field = ({
  id,
  className,
  'data-ref': dataRef,
  label,
  description,
  tooltip,
  actions,
  fieldset,
  inline,
  children,
  required = true,
  optionalText = '(Optional)',
  alertOptions: {
    label: alertLabel,
    type: alertVariant,
    silent: alertSilent = false,
  } = {},
  // TODO (v2) it would be better to combine the props prefixed 'errors' & 'warnings'
  // into alerts and use alertOptions for the labels
  errors,
  errorLabel = 'Error',
  warnings,
  warningLabel = 'Warning',
  ...fieldProps
}: FieldProps) => {
  const labelId = `${id}FieldLabel`;
  const alertsId = `${id}Alerts`;
  const descriptionId = `${id}Description`;

  const errorAlerts = errors ? ensureArray(errors) : [];
  const warningAlerts = warnings ? ensureArray(warnings) : [];
  const hasErrors: boolean =
    alertVariant === MessageVariants.ERROR || errorAlerts.length > 0;
  const hasWarnings: boolean =
    alertVariant === MessageVariants.WARNING || warningAlerts.length > 0;
  const hasAlerts: boolean = hasErrors || hasWarnings;
  let heading: AlertOptionsType['label'] = alertLabel;
  let variant: AlertOptionsType['type'] = alertVariant;

  if (!variant && hasAlerts) {
    variant = hasErrors ? MessageVariants.ERROR : MessageVariants.WARNING;
  }

  if (!heading) {
    if (hasErrors) {
      heading = errorLabel;
    } else if (hasWarnings) {
      heading = warningLabel;
    }
  }

  const alertProps: FieldAlertsProps = {
    alerts: hasErrors ? errorAlerts : warningAlerts,
    ...(hasAlerts
      ? { id: alertsId, variant, heading, silent: alertSilent }
      : { id: undefined, variant: undefined, heading: undefined, silent: undefined }),
  };

  const topAction = actions && !!actions.top;
  const hasBottomActions = actions && !!(actions.left || actions.right);
  // @TODO: - use react proptypes to warn (as a fallback where ts isn't supported)
  const shouldRenderDescription = description && !topAction;
  const ariaDescribedby =
    [shouldRenderDescription ? descriptionId : undefined, alertProps.id]
      .join(' ')
      .trim() || undefined;
  const isGroup = fieldset || !!tooltip || !!actions;

  if (isGroup) {
    fieldProps.role = 'group';
    fieldProps['aria-describedby'] = ariaDescribedby;
    fieldProps['aria-labelledby'] = labelId;
  }

  return (
    <FormStyles>
      {({ classes }) => (
        <div
          data-ref={getDataRef(dataRef, 'field')}
          className={cx(className, classes.field, {
            [classes.fieldset]: fieldset,
            [classes.inlineField]: fieldset && inline,
            [classes[`${alertProps.variant}AlertField`]]: hasAlerts,
            [classes.fieldWithTopAction]: topAction,
          })}
          {...fieldProps}
        >
          <FieldLabel
            data-ref={dataRef}
            id={labelId}
            htmlFor={fieldset ? undefined : id}
            withAction={topAction}
            {...{ fieldset, required, tooltip, optionalText }}
          >
            {label}
          </FieldLabel>

          {topAction && <FieldActions data-ref={dataRef} right={actions.top} />}

          {shouldRenderDescription && (
            <FieldDescription id={descriptionId} data-ref={dataRef}>
              {description}
            </FieldDescription>
          )}

          <div className={classes.fieldBody}>
            {children({
              id,
              inline: fieldset && inline,
              alert: alertProps.variant,
              'data-label-id': labelId,
              'aria-required': required,
              'aria-describedby': isGroup ? undefined : ariaDescribedby,
              'aria-errormessage': alertProps.id,
            })}
          </div>

          {hasBottomActions && (
            <div
              data-ref={getDataRef(dataRef, 'fieldActions')}
              className={classes.fieldActions}
            >
              <FieldActions
                data-ref={dataRef}
                left={actions.left}
                right={actions.right}
              />
            </div>
          )}

          <FieldAlerts data-ref={getDataRef(dataRef, 'fieldAlerts')} {...alertProps} />
        </div>
      )}
    </FormStyles>
  );
};

Field.displayName = 'Field';
