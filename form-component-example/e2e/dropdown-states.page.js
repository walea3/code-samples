import { Page } from 'happier-bdd-automation';

export default class DropdownStatesPage extends Page {
  static pageConfig = {
    name: 'dropdown states',
    uri: '/iframe.html?id=components-form-dropdown--states',
    isGlobal: false,

    elementSelectors: {
      normalListbox: '[data-ref="normal.dropdown"]',
      warningListbox: '[data-ref="warning.dropdown"]',
      errorListbox: '[data-ref="error.dropdown"]',
      disabledListbox: '[data-ref="disabled.dropdown"]',
      normalDropdownOption: '[data-ref="normal.dropdownOption.text"]',
      warningDropdownOption: '[data-ref="warning.dropdownOption.text"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.normalListbox, ...opts });
}
