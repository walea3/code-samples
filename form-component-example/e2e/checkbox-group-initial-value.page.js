import { Page } from 'happier-bdd-automation';

export default class CheckboxGroupPage extends Page {
  static pageConfig = {
    name: 'checkbox group initial value',
    uri: '/iframe.html?id=components-form-checkbox-checkboxgroup--initial-value',
    isGlobal: false,

    elementSelectors: {
      secondCheckboxLabel: '[data-ref="checkboxGroup.1.checkbox"]',
      selectedThirdCheckboxLabel: '[data-ref="checkboxGroup.2.checkbox"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.secondCheckboxLabel, ...opts });
}
