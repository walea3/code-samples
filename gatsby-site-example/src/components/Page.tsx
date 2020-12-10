import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import * as React from 'react';

interface PageProps extends StylingProps {
  children: React.ReactNode;
}

export const pageId: string = 'nelPage';

const Page = ({ classes, children }: PageProps) => (
  <div id={pageId} className={classes.page}>
    {children}
  </div>
);

const styles: Styles = {
  '@global body': {
    margin: 0,
  },

  page: {},
};

export default withNEL(styles)(Page);
