import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const {
    menusYaml: { overviewPage, brandStyles, foundations, patterns, templates },
  } = useStaticQuery(
    graphql`
      query DesignSystemMenu {
        menusYaml(menu: { eq: "design-system" }) {
          overviewPage {
            fields {
              slug
            }
            frontmatter {
              title
              category {
                description
                linkTitle
                image
              }
            }
          }
          brandStyles {
            heading
            overviewPage {
              fields {
                slug
              }
              frontmatter {
                title
                category {
                  description
                  linkTitle
                  image
                }
              }
            }
            pages {
              page {
                fields {
                  slug
                }
                frontmatter {
                  title
                  thumbnail
                }
              }
            }
          }
          foundations {
            heading
            overviewPage {
              fields {
                slug
              }
              frontmatter {
                title
                category {
                  description
                  linkTitle
                  image
                }
              }
            }
            pages {
              page {
                fields {
                  slug
                }
                frontmatter {
                  title
                  thumbnail
                }
              }
            }
          }
          patterns {
            heading
            overviewPage {
              fields {
                slug
              }
              frontmatter {
                title
                category {
                  description
                  linkTitle
                  image
                }
              }
            }
            pages {
              page {
                fields {
                  slug
                }
                frontmatter {
                  title
                  thumbnail
                }
              }
            }
          }
          templates {
            heading
            overviewPage {
              fields {
                slug
              }
              frontmatter {
                title
                category {
                  description
                  linkTitle
                  image
                }
              }
            }
            # pages {
            #   page {
            #     fields {
            #       slug
            #     }
            #     frontmatter {
            #       title
            #       thumbnail {
            #         childImageSharp {
            #           fluid(jpegProgressive: true) {
            #             ...GatsbyImageSharpFluid
            #           }
            #         }
            #       }
            #     }
            #   }
            # }
          }
        }
      }
    `
  );

  return {
    overviewPage,
    sections: { brandStyles, foundations, patterns, templates },
    menus: [brandStyles, foundations, patterns, templates],
  };
};
