import { Page } from 'happier-bdd-automation';

export default class CheckboxGroupPage extends Page {
  static pageConfig = {
    name: 'checkbox group inline',
    uri: '/iframe.html?id=components-form-checkbox-checkboxgroup--inline',
    isGlobal: false,

    elementSelectors: {
      firstItem: '[data-ref="inlineCheckbox.0.checkboxContainer"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.firstItem, ...opts });
}
