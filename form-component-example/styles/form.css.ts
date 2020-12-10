import { Styles } from '@nel-ui/tooling-styling';

import checkradioStyles from './checkradio.css';
import dropdownStyles from './dropdown.css';
import fieldControlLabelStyles from './field-control-label.css';
import fieldStyles from './field.css';
import formAlertMessageStyles from './form-alert-message.css';
import inputStyles from './input.css';
import textareaStyles from './textarea.css';

const styles: Styles = {
  ...formAlertMessageStyles,
  ...inputStyles,
  ...fieldControlLabelStyles,
  ...textareaStyles,
  ...checkradioStyles,
  ...fieldStyles,
  ...dropdownStyles,
};

export default styles;
