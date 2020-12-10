import React from 'react';

import { utils } from '@nel-ui/foundations';
import { IconButton, Link, Small, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

const { px, spacer } = utils;

interface LinkAttr extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  content: string;
}

export interface DownloadFileProps extends StylingProps {
  link: LinkAttr;
  subText: string;
}

const DownloadFile = ({ classes, link, subText }: DownloadFileProps) => (
  <div className={classes.downloadFile}>
    <IconButton
      className={classes.downloadIcon}
      icon="action-40-download"
      title="Download File"
    />

    <div className={classes.downloadContent}>
      <Link {...link}>{link.content}</Link>
      <Small className={classes.downloadSubText}>{subText}</Small>
    </div>
  </div>
);

const style: Styles = {
  downloadFile: {
    display: 'flex',
    marginTop: px(spacer(3)),
  },

  downloadIcon: {
    marginTop: 0,
    marginRight: px(spacer(4)),
    width: px(44),
    height: px(44),
  },

  downloadContent: {},

  downloadSubText: {
    margin: 0,
  },
};

export default withNEL(style)(DownloadFile);
