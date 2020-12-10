import { Page } from 'happier-bdd-automation';

export default class CheckboxGroupPage extends Page {
  static pageConfig = {
    name: 'checkbox group',
    uri: '/iframe.html?id=components-form-checkbox-checkboxgroup--default',
    isGlobal: false,

    elementSelectors: {
      firstItem: '[data-ref="checkboxGroup.0.checkboxContainer"]',
      secondItem: '[data-ref="checkboxGroup.0.checkboxContainer"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.firstItem, ...opts });
}
