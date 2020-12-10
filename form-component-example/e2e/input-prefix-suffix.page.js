import { Page } from 'happier-bdd-automation';

export default class InputPrefixSuffixPage extends Page {
  static pageConfig = {
    name: 'input prefix',
    uri: '/iframe.html?id=components-form-input--prefix-suffix',
    isGlobal: false,

    elementSelectors: {
      onlyPrefix: '[data-ref="prefixAsString.inputPrefix"]',
      onlySuffix: '[data-ref="suffixAsString.inputSuffix"]',
      input: '[data-ref="prefixAsString.input"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.input, ...opts });
}
