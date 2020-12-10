import { Page } from 'happier-bdd-automation';

export default class RadioCustomLabelPage extends Page {
  static pageConfig = {
    name: 'radio custom label',
    uri: '/iframe.html?id=components-form-radio--with-custom-label',
    isGlobal: false,

    elementSelectors: {
      container: '[data-ref="radioContainer"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.container, ...opts });
}
