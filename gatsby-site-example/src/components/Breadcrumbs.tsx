import { Breadcrumbs } from '@nel-ui/react';
import React from 'react';

import useSitePages from '../hooks/useSitePages';

interface SiteBreadcrumbsProps {
  path: string;
}

const SiteBreadcrumbs = ({ path }: SiteBreadcrumbsProps) => {
  const homeHref = '/';
  const pages = useSitePages();
  const { breadcrumbs: items } = path.split('/').reduce(
    ({ url, breadcrumbs }, uri) => {
      const href = `${url}${uri}/`;

      return !uri || href === path
        ? { url, breadcrumbs }
        : {
            url: href,
            breadcrumbs: [...breadcrumbs, { href, content: pages[href] }],
          };
    },
    { url: homeHref, breadcrumbs: [{ href: homeHref, content: pages[homeHref] }] }
  );

  return <Breadcrumbs items={items} />;
};

export default SiteBreadcrumbs;
