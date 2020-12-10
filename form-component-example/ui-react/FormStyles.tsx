import styles from '@nel-ui/form-styles';
import { StylingProps } from '@nel-ui/tooling-react';
import { withNEL } from '@nel-ui/wrapper-react';
import React from 'react';

export interface FormStylesProp extends StylingProps {
  /**
   * Render prop with Form style classes
   */
  children(styleProps: StylingProps): React.ReactElement<{}>;
}

export const FormStyles = ({ children, ...props }: FormStylesProp) =>
  children(props as StylingProps);

FormStyles.displayName = 'FormStyles';

export default withNEL(styles)(FormStyles);
