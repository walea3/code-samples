import { Page } from 'happier-bdd-automation';

export default class FieldsetPage extends Page {
  static pageConfig = {
    name: 'fieldset',
    uri: '/iframe.html?id=components-form-field-patterns--field-set',
    isGlobal: false,

    elementSelectors: {
      checkboxFieldset: '[data-ref="optionalCheckbox.field"]',
      checkboxFieldsetLabel: '[data-ref="optionalCheckbox.fieldLabel"]',
      checkboxA: '[data-ref="field-a.checkbox"]',
      checkboxB: '[data-ref="field-b.checkbox"]',
      checkboxC: '[data-ref="field-c.checkbox"]',

      radioYes: '[data-ref="field-yes.radio"]',
      radioNo: '[data-ref="field-no.radio"]',
      radioMaybe: '[data-ref="field-maybe.radio"]',
    },
  };
  isOpen = (opts) =>
    super.isOpen({ getPageElement: this.elements.checkboxFieldset, ...opts });
}
