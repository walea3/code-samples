import { Page } from 'happier-bdd-automation';

export default class InputPrefixSuffixPage extends Page {
  static pageConfig = {
    name: 'input size',
    uri: '/iframe.html?id=components-form-input--character-sizing',
    isGlobal: false,

    elementSelectors: {
      input: '[data-ref="sizing.input"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.input, ...opts });
}
