import { siteMetadata } from "./config";
import tailwindConfig from "./tailwind.config";
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-codegen`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/contents/blog/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `basepages`,
            path: `${__dirname}/contents/basepages`,
        },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                        disableBgImageOnAlpha: true
                    },
                },
                `gatsby-remark-copy-linked-files`,
                {
                  resolve: `gatsby-remark-table-of-contents`,
                  options: {
                    exclude: "Table of Contents",
                    tight: true,
                    ordered: true,
                    fromHeading: 1,
                    toHeading: 6,
                    className: "table-of-contents"
                  },
                },
                {
                  resolve: `gatsby-remark-autolink-headers`,
                  options: {
                    icon: false,
                  },
                },
                {
                  resolve: `gatsby-remark-highlight-code`,
                  options: {
                    terminal: "carbon"
                  },
                },            
            ],
        },
    },
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            tailwindcss(tailwindConfig),
            autoprefixer,
            ...(process.env.NODE_ENV === `production`
              ? [require(`cssnano`)]
              : []),
          ],
        },
      },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
            "G-9S43L0BB9X",
          ],
        },
        pluginConfig: {
          head: true,
        },
    },
    {
        resolve: `gatsby-plugin-csp`,
        options: {
          disableOnDev: false,
          reportOnly: false,
          mergeScriptHashes: true,
          mergeStyleHashes: false,
          mergeDefaultDirectives: true,
          directives: {
            "script-src": "https: 'unsafe-eval'",
            "script-src-elem": "'self' 'unsafe-inline' https://plausible.io/js/script.outbound-links.js",
            "style-src": "'self' 'unsafe-inline'",
            "style-src-elem": "'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src": "'self' data: https://fonts.gstatic.com/s/karla/v30/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaHUlKZbLXGhmRytc.woff2 https://fonts.gstatic.com/s/karla/v30/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaE0lKZbLXGhmR.woff2",
            "img-src": "*"
          }
        }
    },
]

export default {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
