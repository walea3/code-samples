import { Page } from 'happier-bdd-automation';

export default class DropdownDefaultSelectionPage extends Page {
  static pageConfig = {
    name: 'dropdown default selection',
    uri: '/iframe.html?id=components-form-dropdown--with-default-selection',
    isGlobal: false,

    elementSelectors: {
      firstDropdown: '[data-ref="first.dropdown"]',
      secondDropdown: '[data-ref="second.dropdown"]',
      secondDropdownOption: '[data-ref="second.dropdownOption.text"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.firstDropdown, ...opts });
}
