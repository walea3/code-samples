import { Page } from 'happier-bdd-automation';

export default class RadioGroupPage extends Page {
  static pageConfig = {
    name: 'radio group inline',
    uri: '/iframe.html?id=components-form-radio-radiogroup--inline',
    isGlobal: false,

    elementSelectors: {
      firstItem: '[data-ref="inlineRadioGroup.0.radioContainer"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.firstItem, ...opts });
}
