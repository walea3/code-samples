import React from 'react';

import { NavigationItem } from '../../interfaces/sidebar.interface';
import { isCurrentPage } from '../../utils/location';
import SideBarLink from './SideBarLink';

export interface SideBarItemProps {
  path?: string;
  links: NavigationItem[];
}

const SideBarItem = ({ links, path }: SideBarItemProps) => {
  if (links && !links.length) return null;

  return (
    <>
      {links.map(({ page: { fields: { slug }, frontmatter: { title } } }, i) => {
        const currentPage = isCurrentPage(slug, true, path);

        return (
          <SideBarLink
            key={`designSystem-item-${i}`}
            href={slug}
            active={currentPage}
            aria-current={currentPage}
          >
            {title}
          </SideBarLink>
        );
      })}
    </>
  );
};

export default SideBarItem;
