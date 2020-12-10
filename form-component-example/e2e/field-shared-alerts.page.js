import { Page } from 'happier-bdd-automation';

export default class SharedAlertsFieldSetPage extends Page {
  static pageConfig = {
    name: 'shared alerts',
    uri: '/iframe.html?id=components-form-field-patterns--field-set-with-shared-alerts',
    isGlobal: false,

    elementSelectors: {
      inputFieldset: '[data-ref="inline.input.shared.alert.field"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.inputFieldset, ...opts });
}
