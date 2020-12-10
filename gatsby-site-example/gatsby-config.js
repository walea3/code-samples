const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-yaml',
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/img`,
      name: 'uploads',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/menus`,
      name: 'menus',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/img`,
      name: 'images',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 2048,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static',
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
      manualInit: true,
      enableIdentityWidget: false,
    },
  },
];

if (process.env.GA_TRACKING_ID) {
  plugins.unshift({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: process.env.GA_TRACKING_ID,
      head: true,
    },
  });
}

const pageMappings = ['brandStyles', 'foundations', 'patterns', 'templates']
  .reduce(
    (acc, item) => [
      ...acc,
      `MenusYaml.${item}.pages.page`,
      `MenusYaml.${item}.overviewPage`,
    ],
    ['MenusYaml.overviewPage', 'MenusYaml.pages.page']
  )
  .reduce((acc, type) => ({ ...acc, [type]: 'MarkdownRemark.frontmatter.title' }), {});

const mapping = {
  ...pageMappings,
  'MarkdownRemark.frontmatter.guides.guide': 'GuidesYaml.title',
};

module.exports = {
  siteMetadata: {
    title: 'NEL',
    description: 'Noop Experience Language',
  },
  plugins,
  mapping,
};
