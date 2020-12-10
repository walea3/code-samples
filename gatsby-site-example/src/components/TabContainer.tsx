import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Link, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React, { useState } from 'react';

export interface TabsProps extends StylingProps {
  children: React.ReactChild[];
}

const { px, mq } = utils;

export const TabContainer = ({ children: items, classes }) => {
  if (items.length === 0) return null;

  const [activeTab, setActiveTab] = useState(0);

  const links = items.map(({ props }) => ({ title: props.title }));

  return (
    <>
      <div className={classes.tabContainer}>
        {links.map(({ title, ...item }, index) => (
          <Link
            key={`nav-item-${index}`}
            {...item}
            onClick={() => setActiveTab(index)}
            className={cx(classes.tabLink, {
              [classes.active]: activeTab === index,
              [classes.inactive]: activeTab !== index,
            })}
          >
            {title}
          </Link>
        ))}
      </div>

      <div className={classes.tabGroup}>
        {items.map((child, index) =>
          activeTab === index ? (
            <section key={`tab-${index}`} className={classes.tabSection}>
              {child}
            </section>
          ) : null
        )}
      </div>
    </>
  );
};

const tabTheme = {
  activeBlue: foundationTheme.colourInteractionFeedback100,
  inActiveBlue: foundationTheme.colourInteractionPrimary,
  tabContainerMarginBottomLg: 64,
  tabContainerMarginBottomSm: 32,
};

const theme = {
  ...foundationTheme,
  ...tabTheme,
};

export const styles: Styles = {
  tabContainer: {
    isolate: 0,
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: px(48),
    marginBottom: px(theme.tabContainerMarginBottomSm),
    borderBottom: '1px solid #d8d8d8',
    [mq.breakpoint768]: {
      marginBottom: px(theme.tabContainerMarginBottomLg),
    },
  },

  tabLink: {
    isolate: 0,
    display: 'flex',
    flex: 1,
    paddingBottom: px(10),
    borderBottom: `${px(6)} solid transparent`,

    '&$active': {
      isolate: 0,
      borderBottomColor: theme.activeBlue,
    },

    '& span': {
      isolate: 0,
      flex: 1,
      textAlign: 'center',
      borderBottom: 'none',
    },
  },

  active: {
    color: theme.activeBlue,
  },

  inactive: {
    color: theme.inActiveBlue,
  },

  tabGroup: {},
  tabSection: {},
};

export default withNEL(styles)(TabContainer);
