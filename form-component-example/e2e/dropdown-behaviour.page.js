import { Page } from 'happier-bdd-automation';

export default class DropdownBehaviourPage extends Page {
  static pageConfig = {
    name: 'dropdown behaviour',
    uri: '/iframe.html?id=components-form-dropdown--behaviour',
    isGlobal: false,

    elementSelectors: {
      topDropdown: '[data-ref="top.dropdown"]',
      topDropdownOption: '[data-ref="top.dropdownOption.text"]',
      centerDropdown: '[data-ref="center.dropdown"]',
      centerDropdownOption: '[data-ref="center.dropdownOption.text"]',
      bottomDropdown: '[data-ref="bottom.dropdown"]',
      bottomDropdownOption: '[data-ref="bottom.dropdownOption.text"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.topDropdown, ...opts });
}
