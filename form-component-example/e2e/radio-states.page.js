import { Page } from 'happier-bdd-automation';

export default class RadioStatesPage extends Page {
  static pageConfig = {
    name: 'radio states',
    uri: '/iframe.html?id=components-form-radio--states',
    isGlobal: false,

    elementSelectors: {
      normalLabel: '[data-ref="normal-unchecked.radio"]',
      normalIcon: '[data-ref="normal-unchecked.radioControl"]',
      normalContainer: '[data-ref="normal-unchecked.radioContainer"]',

      disabledLabel: '[data-ref="disabled-unchecked.radio"]',
      disabledIcon: '[data-ref="disabled-unchecked.radioControl"]',

      warningLabel: '[data-ref="warning-unchecked.radio"]',
      warningIcon: '[data-ref="warning-unchecked.radioControl"]',

      errorLabel: '[data-ref="error-unchecked.radio"]',
      errorIcon: '[data-ref="error-unchecked.radioControl"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.normalLabel, ...opts });
}
