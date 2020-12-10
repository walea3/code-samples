import { Page } from 'happier-bdd-automation';

export default class CheckCustomLabelPage extends Page {
  static pageConfig = {
    name: 'checkbox custom label',
    uri: '/iframe.html?id=components-form-checkbox--with-custom-label',
    isGlobal: false,

    elementSelectors: {
      container: '[data-ref="checkboxContainer"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.container, ...opts });
}
