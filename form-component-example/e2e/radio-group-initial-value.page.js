import { Page } from 'happier-bdd-automation';

export default class RadioGroupPage extends Page {
  static pageConfig = {
    name: 'radio group initial value',
    uri: '/iframe.html?id=components-form-radio-radiogroup--initial-value',
    isGlobal: false,

    elementSelectors: {
      secondItem: '[data-ref="radioGroup.1.radio"]',
      thirdItem: '[data-ref="radioGroup.2.radio"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.secondItem, ...opts });
}
