import { Page } from 'happier-bdd-automation';

export default class InlineFieldSetPage extends Page {
  static pageConfig = {
    name: 'inline fieldset',
    uri: '/iframe.html?id=components-form-field-patterns--inline-field-set',
    isGlobal: false,

    elementSelectors: {
      inputFieldset: '[data-ref="inline.input.field"]',
      inputContainer: '[data-ref="inline.fieldControlLabelContainer"]',
      inputLabel: '[data-ref="inline.fieldControlLabel"]',

      checkboxFieldset: '[data-ref="inline.checkbox.field"]',
      checkboxLabel: '[data-ref="inlineCheckboxGroup.0.checkbox"]',

      radioFieldset: '[data-ref="iinline.radio.field"]',
      radioLabel: '[data-ref="inlineRadioGroup.0.radio"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.inputFieldset, ...opts });
}
