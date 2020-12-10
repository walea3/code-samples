import { utils } from '@nel-ui/foundations';
import { HeadingCabernet, Link, List, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

const { proximity } = utils;

interface ActionLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  content: string;
}

export interface PageItemProps extends StylingProps {
  title: string;
  content: string;
  actionLinks: ActionLinkProps[];
}

const PageItem = ({ title, content, actionLinks, classes }: PageItemProps) => {
  const hasActionsLinks: boolean = actionLinks && !!actionLinks.length;

  return (
    <div className={classes.pageItem}>
      <HeadingCabernet level={2}>{title}</HeadingCabernet>

      {content}

      {hasActionsLinks && (
        <List>
          {actionLinks.map(({ content: linkContent, ...cta }) => (
            <List.Item key={cta.href}>
              <Link {...cta}>{linkContent}</Link>
            </List.Item>
          ))}
        </List>
      )}
    </div>
  );
};

const styles: Styles = {
  pageItem: {
    isolate: 0,

    '& > a': {
      isolate: 0,
      display: 'inline-block',
      ...proximity(4),
    },
  },
};

export default withNEL(styles)(PageItem);
