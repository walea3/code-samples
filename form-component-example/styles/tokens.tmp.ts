import { theme } from '@nel-ui/foundations';
import { getZIndex } from '@nel-ui/portal-react';

export const formControlSpacingVertical: number = 6;
export const formControlSpacingHorizontal: number = 12;
export const formControlBorderRadius: number = 4;
export const formControlBorderSize: number = 1;
export const formControlInteractionBorderSize: number = 4;
export const formControlBorderColour: string = theme.colourUi50;

export const fieldProximity: number = 6;

/**
 * Field action
 */
export const fieldActionProximity: number = 2;
export const fieldActionOffset: number = 16;
export const fieldActionMaxWidth: string = '50%';

export const fieldAlertBorderSize: number = 4;
export const formAlertMessageBorderSize: number = fieldAlertBorderSize;
export const formAlertMessageBorderStyle: string = 'solid';
export const formAlertMessageBorderColourWarning: string = theme.colourInteractionWarning100;
export const formAlertMessageBorderColourError: string = theme.colourInteractionError100;

export const formAlertMessageBorderWarning: string = `${formAlertMessageBorderSize}px ${formAlertMessageBorderStyle} ${formAlertMessageBorderColourWarning}`;
export const formAlertMessageBorderError: string = `${formAlertMessageBorderSize}px ${formAlertMessageBorderStyle} ${formAlertMessageBorderColourError}`;

/**
 * Input
 */
export const inputHeight: number = 40;
export const inputProximity: number = 3;
export const inputLabelProximity: number = 4;
export const inputLabelSpacing: number = 8;
export const inputInlineSpacing: number = 16;

/**
 * Textarea
 */
export const textareaMinHeight: number = 160;
export const textareaMaxColumnWidth: number = 8;

/**
 * Checkbox / Radio
 */
export const checkRadioDisabledCheck: string = theme.colourUi05;
export const checkRadioDisabledBackgroundColour: string = theme.colourUi20;
export const checkRadioDisabledSelectedBackgroundColour: string = theme.colourUi05;

export const checkRadioDisabledBorder: string = theme.colourUi50;
export const checkRadioSize: number = 28;
export const checkRadioLabelSpacing: number = 12;
export const radioBorderRadio: string = '50%';

/**
 * Dropdown
 */

const dropdownZIndexBase: number = getZIndex(7);
export const dropdownDividerZIndex: number = dropdownZIndexBase + 4;
export const dropdownOptionsZIndex: number = dropdownZIndexBase + 3;
export const dropdownZIndexIcon: number = dropdownZIndexBase + 2;
export const dropdownFadeZIndex: number = dropdownZIndexBase + 1;

export const dropdownProximity: number = 3;
export const dropdownHeight: number = 40;
export const dropdownMaxHeight: number = 400;
export const dropdownMaxWidth: number = 400;
export const dropdownTextFadeWidth: number = 46;
export const dropdownTextVerticalSpacing: number = 1.5;
export const dropdownTextHorizontalSpacing: number = 3;

export const fieldAlertIconSpacer: number = 2;
export const formAlertMessageIconSpacer: number = fieldAlertIconSpacer;
