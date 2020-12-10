import { utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';
import Divider from './Divider';

const { proximity } = utils;

const ContentDivider = ({ classes }: StylingProps) => (
  <Divider className={classes.contentDivider} />
);

const styles: Styles = {
  contentDivider: proximity(5, 'margin', 'vertical'),
};

export default withNEL(styles)(ContentDivider);
