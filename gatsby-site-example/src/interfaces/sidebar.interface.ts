export interface NavigationItem {
  page: {
    fields: { slug: string };
    frontmatter: { title: string };
  };
}

interface SideBarLinkProps {
  heading: string;
  links: NavigationItem[];
}

export interface SideBarItemsProps {
  links: NavigationItem[];
  pages: SideBarLinkProps[];
}
