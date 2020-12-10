import { Page } from 'happier-bdd-automation';

export default class InputPrefixSuffixPage extends Page {
  static pageConfig = {
    name: 'input types',
    uri: '/iframe.html?id=components-form-input--input-types',
    isGlobal: false,

    elementSelectors: {
      input: '[data-ref="type.input"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.input, ...opts });
}
