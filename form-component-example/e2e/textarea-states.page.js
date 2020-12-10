import { Page } from 'happier-bdd-automation';

export default class TextareaStatesPage extends Page {
  static pageConfig = {
    name: 'textarea states',
    uri: '/iframe.html?id=components-form-textarea--states',
    isGlobal: false,

    elementSelectors: {
      normal: '[data-ref="normal.textarea"]',
      disabled: '[data-ref="disabled.textarea"]',
      warning: '[data-ref="warning.textarea"]',
      error: '[data-ref="error.textarea"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.normal, ...opts });
}
