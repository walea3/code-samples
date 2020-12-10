import { Page } from 'happier-bdd-automation';

export default class RadioGroupPage extends Page {
  static pageConfig = {
    name: 'radio group',
    uri: '/iframe.html?id=components-form-radio-radiogroup--default',
    isGlobal: false,

    elementSelectors: {
      firstItem: '[data-ref="radioGroup.0.radioContainer"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.firstItem, ...opts });
}
