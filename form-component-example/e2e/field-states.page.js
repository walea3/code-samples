import { Page } from 'happier-bdd-automation';

export default class FieldStatesPage extends Page {
  static pageConfig = {
    name: 'field states',
    uri: '/iframe.html?id=components-form-field--states',
    isGlobal: false,

    elementSelectors: {
      basicField: '[data-ref="basic.field"]',
      basicLabel: '[data-ref="basic.fieldLabel.heading"]',
      basicInput: '[data-ref="basic.inputContainer"]',
      descLabel: '[data-ref="desc.fieldLabel"]',
      descText: '[data-ref="desc.fieldDescription.text"]',
      descInput: '[data-ref="desc.input"]',
      warningField: '[data-ref="warning.field"]',
      warningLabel: '[data-ref="warning.fieldLabel"]',
      warningInput: '[data-ref="warning.input"]',
      warningAlert: '[data-ref="warning.fieldAlerts.fieldAlerts.message"]',
      errorField: '[data-ref="error.field"]',
      errorLabel: '[data-ref="error.fieldLabel"]',
      errorInput: '[data-ref="error.input"]',
      optionalField: '[data-ref="fieldOptional.field"]',
      optionalFieldLabel: '[data-ref="fieldOptional.fieldLabel"]',
      optionalCustomField: '[data-ref="optionalCustomText.field"]',
      optionalCustomFieldLabel: '[data-ref="optionalCustomText.fieldLabel"]',
      textareaErrorField: '[data-ref="optionalTextarea.error.field"]',
      textareaErrorFieldInput: '[data-ref="textarea"]',
      textareaErrorFieldLabel: '[data-ref="optionalTextarea.error.fieldLabel"]',
      dropdownField: '[data-ref="dropdown.field"]',
      dropdownFieldLabel: '[data-ref="dropdown.fieldLabel"]',
      dropdown: '[data-ref="dropdown"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.basicLabel, ...opts });
}
