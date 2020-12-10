import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const { allSitePage } = useStaticQuery(
    graphql`
      query SitePages {
        allSitePage(
          filter: { id: { glob: "SitePage /**" }, context: { title: { glob: "*" } } }
        ) {
          edges {
            node {
              path
              context {
                title
              }
            }
          }
        }
      }
    `
  );

  return allSitePage.edges.reduce(
    (acc, { node }) => ({
      ...acc,
      [node.path]: node.context.title,
    }),
    {}
  );
};
