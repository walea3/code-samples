import { Page } from 'happier-bdd-automation';

export default class CheckStatesPage extends Page {
  static pageConfig = {
    name: 'checkbox states',
    uri: '/iframe.html?id=components-form-checkbox--states',
    isGlobal: false,

    elementSelectors: {
      normalContainer: '[data-ref="normal-unchecked.checkboxContainer"]',
      normalLabel: '[data-ref="normal-unchecked.checkbox"]',
      normalIcon: '[data-ref="normal-unchecked.checkboxControl"]',

      disabledLabel: '[data-ref="disabled-unchecked.checkbox"]',
      disabledIcon: '[data-ref="disabled-unchecked.checkboxControl"]',

      warningLabel: '[data-ref="warning-unchecked.checkbox"]',
      warningIcon: '[data-ref="warning-unchecked.checkboxControl"]',

      errorLabel: '[data-ref="error-unchecked.checkbox"]',
      errorIcon: '[data-ref="error-unchecked.checkboxControl"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.normalContainer, ...opts });
}
