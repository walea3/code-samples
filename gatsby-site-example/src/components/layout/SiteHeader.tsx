import React, { useState } from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import {
  Button,
  HeaderBar,
  IconProps,
  Link,
  Modal,
  P,
  SecondaryButton,
  withNEL,
} from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import NelLogo from './Logo';
import Navigation from './Navigation';

import MobileHeaderAction from '../MobileHeaderAction';

const { px, mq, em } = utils;

interface SiteHeaderProps extends React.HTMLAttributes<HTMLHeadElement>, StylingProps {
  id: string;
  className?: string;
  path?: string;
}

const nelEmail: string = 'nel@noopdigital.co.uk';

const copy = {
  modalTrigger: {
    content: 'Ask NEL',
  },
  modal: {
    ariaLabel: 'Ask NEL modal',
    title: 'Ask NEL',
    content: (
      <P>
        We'd love to get your feedback on the Nel site. So if you want to share your
        thoughts or speak to the team, email us at{' '}
        <Link href={`mailto:${nelEmail}`}>{nelEmail}</Link>.
      </P>
    ),
    closeButton: 'Close',
  },
};

interface MobileHeaderButton {
  icon: IconProps['name'];
  title: string;
  onClick: () => void;
}

const SiteHeader = ({ classes, path, ...props }: SiteHeaderProps) => {
  const [displayAskModal, setAskNelModal] = useState(false);

  const handleAskNel = () => setAskNelModal(!displayAskModal);

  const openAskNelModal = () => setAskNelModal(true);
  const closeAskNelModal = () => setAskNelModal(false);

  const mobileHeaderButtonList: MobileHeaderButton[] = [
    {
      icon: 'action-40-question-mark',
      title: copy.modalTrigger.content,
      onClick: openAskNelModal,
    },
  ];

  // Note - Used twice for mobile/large screen viewports
  const SiteNavigation = (navProps?) => (
    <Navigation
      className={classes.largeNavigation}
      actions={
        <SecondaryButton className={classes.askNelTrigger} onClick={handleAskNel}>
          {copy.modalTrigger.content}
        </SecondaryButton>
      }
      path={path}
      {...navProps}
    />
  );

  return (
    <>
      <HeaderBar
        {...props}
        shadow
        maxWidth={2000}
        logo={
          <>
            <a href="/" className={classes.homeLink}>
              <NelLogo />
            </a>

            {!!mobileHeaderButtonList.length && (
              <aside className={classes.actionsContainer}>
                {mobileHeaderButtonList.map((mobileButton) => (
                  <MobileHeaderAction key={mobileButton.title} {...mobileButton} />
                ))}
              </aside>
            )}
          </>
        }
        bottomRegion={<SiteNavigation className={classes.mobileNavigation} />}
        rightRegion={
          <>
            <SiteNavigation
              className={classes.largeNavigation}
              actions={
                <SecondaryButton className={classes.askNelTrigger} onClick={handleAskNel}>
                  {copy.modalTrigger.content}
                </SecondaryButton>
              }
            />

            {/*
              Awaiting DESIGN SIGN-OFF
              <NelSiteSearch />
            */}
          </>
        }
      />

      {displayAskModal && (
        <Modal
          className={classes.askNelModal}
          aria-label={copy.modal.ariaLabel}
          heading={copy.modal.title}
          footer={<Button onClick={closeAskNelModal}>{copy.modal.closeButton}</Button>}
          onClose={closeAskNelModal}
        >
          {copy.modal.content}
        </Modal>
      )}
    </>
  );
};

const largeDown: string = `@media (max-width: ${em(foundationTheme.screenLg - 1)})`;

const styles: Styles = {
  homeLink: {
    textDecoration: 'none',

    // Force Hover state
    '&, & *': {
      cursor: 'pointer',
    },
  },

  actionsContainer: {
    position: 'absolute',
    top: px(10),
    right: px(16),
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,

    [mq.breakpoint768]: {
      display: 'none',
    },

    '& > button': {
      isolate: 0,
      width: 'initial',
    },
  },

  largeNavigation: {
    [largeDown]: {
      display: 'none',
    },
  },

  mobileNavigation: {
    [mq.screenLg]: {
      display: 'none',
    },
  },

  askNelTrigger: {
    display: 'none',
    margin: `0 0 0 ${px(40)}`,

    [mq.breakpoint768]: {
      display: 'inline-flex',
    },
  },
};

export default withNEL(styles)(SiteHeader);
