import React from 'react';

import { Icon, Input, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

type NelSiteSearchProps = StylingProps;

const NelSiteSearch = ({ classes, ...props }: NelSiteSearchProps) => (
  <Input
    id="nel-site-search"
    className={classes.siteSearch}
    suffix={<Icon name="sys-search" />}
    defaultValue="Search..."
    {...props}
  />
);

const styles: Styles = {
  siteSearch: {
    marginTop: 0,
    marginLeft: 40,
  },
};

export default withNEL(styles)(NelSiteSearch);
