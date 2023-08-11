import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `todo-app`,
    siteUrl: `https://www.yourdomain.tld`,
    favicon: './src/images/favicon.ico',
  },

  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans`,
          `source sans pro\:300,400,400i,700`,
        ],
        display: 'swap'
      }
    }
  ]
};

export default config;
