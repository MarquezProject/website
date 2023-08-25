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
          mergeStyleHashes: true,
          mergeDefaultDirectives: true,
          directives: {
            "script-src": "'self' 'unsafe-eval' https://plausible.io/js/script.outbound-links.js",
            "script-src-elem": "'self' 'unsafe-hashes' 'sha256-jd1C8gAt3KiQo8RJ8fB5lxwhuFWo8UXLGvHAehvxeVk=' 'sha256-iKkBKEi9og8215U4DjZbF+TYC1aw/Q4XtA+Yz8JiSh4=' 'sha256-OzUnmjMIVuS+lOnNyveodXW96iw8WIDsfo02bVyJTKE=' 'sha256-r1R1bJHQ2LX3ekmreqx7Y+aSiGGrpPYACbCKNP9s82Q=' 'sha256-egpbluqkD8NT0bY3bWy7raM9tRIMkfUWboq0Y8KqsFk=' https://plausible.io/js/script.outbound-links.js https://www.googletagmanager.com",
            "style-src": "'self' 'unsafe-hashes' 'sha256-+94JOX1HQRANuLOsn1gpzNE3I3JLzO0wrP9KspQf0cM=' 'sha256-iahNazrr5t3BQXcVfXbYSR8Bd2AOXPifwVTBbIKb/bE=' 'sha256-7buiYDizqbiAS404WOu2AY5NZDzyVesjpBU80D6Nno4=' 'sha256-f7qc12gYVX0xoX9jAoOIxHvtXcfppKYwcBr7sE0GLR4=' 'sha256-o4LYhp5wtluJ8/NWUV2vi+r5AxmP8X2zEvYHCpji+kI=' 'sha256-MtxTLcyxVEJFNLEIqbVTaqR4WWr0+lYSZ78AzGmNsuA=' https://fonts.googleapis.com",
            "style-src-elem": "'self' 'unsafe-hashes' 'sha256-LuLD83XjKEDeQE2JbDqHgDbq4FVgc43d4S4wUyGCjEs=' 'sha256-mLiecSDCbxU+GwpOjEW11Ddlsg09pqoF9VA2VJ8XAK4=' 'sha256-UrOiXfLZp9TdAD7NY9X+JKYQ8F+C7AsCo9loq6bNNX8=' 'sha256-27nLLCfJPKzC4cpzFwNqY3YTXYmR0/qs1ExOGhQCw/c=' 'sha256-cLHlYu9WwZQgD1K6YlWPqFYXJEuD9YpxdlDktBDedco=' https://fonts.googleapis.com",
            "font-src": "'self' data: https://fonts.gstatic.com/s/karla/v30/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaHUlKZbLXGhmRytc.woff2 https://fonts.gstatic.com/s/karla/v30/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqaE0lKZbLXGhmR.woff2",
          }
        }
    },
]

export default {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
