import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Calendar } from "react-feather"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Row, Col } from "../components/shortcodes/index"

import { BlogQuery } from "./__generated__/BlogQuery"

export default function blog({ location, data }: PageProps<BlogQuery, {}>) {
    return (
        <Layout
            seo={{
                title: data.mdx.frontmatter.title,
                description: data.mdx.frontmatter.description,
                image: data.mdx.frontmatter.banner.publicURL
            }}
            location={location}
        >
            <div className="blog-template-outer-div">
                <div className="blog-template-inner-div">
                    {data.mdx.frontmatter.banner.publicURL.endsWith('.svg') ?
                    <img src={data.mdx.frontmatter.banner.publicURL} alt="''"/> :
                    <Img fluid={data.mdx.frontmatter.banner.childImageSharp.fluid}/>}
                    <div className="blog-template-title-outer-div">
                        <div className="blog-template-title-inner-div">
                            <h1>{data.mdx.frontmatter.title}</h1>
                            <p className="blog-template-calendar">
                                <Calendar />{" "}
                                <span>
                                    {data.mdx.frontmatter.date} by {data.mdx.frontmatter.author}
                                </span>
                            </p>
                            <p className="blog-template-frontmatter">
                                {data.mdx.frontmatter.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-template-body">
                    <MDXProvider components={{ Row, Col }}>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                description
                author
                banner {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                        id
                    }
                }
            }
        }
    }
`
