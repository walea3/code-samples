import { Page } from 'happier-bdd-automation';

export default class InlineFieldSetPage extends Page {
  static pageConfig = {
    name: 'field date',
    uri: '/iframe.html?id=components-form-field-patterns--date',
    isGlobal: false,

    elementSelectors: {
      dmy: '[data-ref="date.dmy.input"]',
      dm: '[data-ref="date.dm.input"]',
      my: '[data-ref="date.my.input"]',
      dmyLabel: '[data-ref="date.dmy.fieldControlLabel"]',
      fieldLabel: '[data-ref="fieldLabel"]',
    },
  };
  isOpen = (opts) => super.isOpen({ getPageElement: this.elements.dmy, ...opts });
}
