import { Page } from 'happier-bdd-automation';

export default class LowProminenceMessage extends Page {
  static pageConfig = {
    name: 'alert box',
    uri: '/iframe.html?id=components-form-formalertmessage--variants',
    isGlobal: false,

    elementSelectors: {
      page: '[data-ref="grid"]',
      errorMessage: '[data-ref="error.alert-box.message"]',
      errorIcon: '[data-ref="error.alert-box.message"] svg',
      errorContent: '[data-ref="error.alert-box.messageHeader.text"]',
      errorMessageList: '[data-ref="list"]',
      infoMessage: '[data-ref="info-high.message"]',
      tipMessage: '[data-ref="tip-high.message"]',
      warningMessage: '[data-ref="warning-high.message"]',
      errorMessage: '[data-ref="error.alert-box.message"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.errorMessage, ...opts });
}
