import { Page } from 'happier-bdd-automation';

export default class InputPrefixSuffixPage extends Page {
  static pageConfig = {
    name: 'input label',
    uri: '/iframe.html?id=components-form-input--labeled',
    isGlobal: false,

    elementSelectors: {
      input: '[data-ref="sublabel.input"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.input, ...opts });
}
