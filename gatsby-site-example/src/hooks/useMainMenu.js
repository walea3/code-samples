import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const { menusYaml } = useStaticQuery(
    graphql`
      query MainMenu {
        menusYaml(menu: { eq: "main" }) {
          pages {
            page {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            label
          }
        }
      }
    `
  );

  return menusYaml;
};
