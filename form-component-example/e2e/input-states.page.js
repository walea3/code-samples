import { Page } from 'happier-bdd-automation';

export default class InputStatesPage extends Page {
  static pageConfig = {
    name: 'input states',
    uri: '/iframe.html?id=components-form-input--states',
    isGlobal: false,

    elementSelectors: {
      normalInput: '[data-ref="normal.inputContainer"]',
      normalInputField: '[data-ref="normal.input"]',
      disabledInput: '[data-ref="disabled.inputContainer"]',
      disabledInputField: '[data-ref="disabled.input"]',
      warningInput: '[data-ref="warning.inputContainer"]',
      warningInputField: '[data-ref="warning.input"]',
      errorInput: '[data-ref="error.inputContainer"]',
      errorInputField: '[data-ref="error.input"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.normalInput, ...opts });
}
