import { Page } from 'happier-bdd-automation';

export default class FieldActionPage extends Page {
  static pageConfig = {
    name: 'field action',
    uri: '/iframe.html?id=components-form-field-patterns--field-with-actions',
    isGlobal: false,

    elementSelectors: {
      basicInput: '[data-ref="action.input"]',
      basicTopLeftLabel: '[data-ref="basic.field.action.fieldLabel"]',
      basicBottomContainer: '[data-ref="basic.field.action.fieldActions"]',
      basicBottomLeftLabel: '[data-ref="basic.field.action.fieldActionLeft"]',

      pwdActionInput: '[data-ref="default.passwordField.input"]',
      pwdActionTopLabel: '[data-ref="default.passwordField.right.button"]',

      errorAction: '[data-ref="withErrors.passwordField.field"]',
      warningAction: '[data-ref="withWarnings.passwordField.field"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.basicInput, ...opts });
}
