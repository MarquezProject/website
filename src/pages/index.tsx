import React from "react"
import { graphql, PageProps } from "gatsby"
import { Link } from "gatsby"

import { ArrowRight } from "react-feather"
import { GitHub } from "react-feather"
import { Slack } from "react-feather"

import Layout from "../components/layout"
import { Button } from "../components/ui"

import ItemBlog from "../components/item-blog"
import { IndexPageQuery } from "./__generated__/IndexPageQuery"

export default ({ data, location }: PageProps<IndexPageQuery>) => {
    const siteData = data.site.siteMetadata

    const blogList = data.blog.edges.map(item => (
        <ItemBlog data={item.node} key={`b-item-index-${item.node.id}`} />
    ))

    return (
        <Layout
            front={true}
            seo={{
                title: "Home",
                description: siteData.description,
            }}
            navPlaceholder={false}
            location={location}
        >
            <Wall data={siteData} />
            <About />
            <FeatureBoxes />
            {/* <Blog>{blogList}</Blog> */}
        </Layout>
    )
}

const Wall = ({ data }) => {
    return (
        <div
            className="wall flex relative justify-center items-center overflow-hidden pt-24 px-16"
        >
            <div className="flex-1 lg:block relative w-full h-full top-0 left-0 hidden">
                <div className="w-full h-full">
                    <img
                        src="/images/screenshot.svg"
                        alt=""
                        className="h-full w-auto max-w-none lg:h-auto lg:w-full pr-12"
                    />
                </div>
            </div>
            <div className="flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default">
                <div className="title">
                    <h1 className="text-5xl relative mt-20 lg:text-6xl">
                        Data lineage for <span className="nowrap">every pipeline</span>
                    </h1>
                </div>
                <p className="text-lg lg:text-xl text-color-3 pb-6 pt-3 pb-6">
                    Use Marquez to collect, aggregate, and visualize metadata about your data pipelines and applications.
                </p>
                <div className="py-5 pb-20">
                    <Button
                        title="Quickstart"
                        to='/quickstart'
                        type="link"
                        iconRight={<ArrowRight />}
                        className="mx-5 rounded-full opacity-80 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-105"
                    />
                    <Button
                        title="GitHub"
                        to='https://github.com/MarquezProject/marquez'
                        type="extbutton"
                        iconRight={<GitHub />}
                        className="mx-5 rounded-full opacity-80 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-105"
                    />
                    <Button
                        title="Slack"
                        to='https://bit.ly/MqzSlackInvite'
                        type="extbutton"
                        iconRight={<Slack />}
                        className="mx-5 rounded-full opacity-80 hover:opacity-100 transition duration-500 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>
        </div>
    )
}

const About = ({ }) => {
    return (
        <div className="border-t-2 border-dashed border-color-2" >
            <div className="px-4 py-12 boxed text-center lg:pt-14 lg:px-0">
                <h2 className="relative text-3xl">
                    What is Marquez?
                </h2>
                <p className="mt-5  pt-3 px-6">
                    Marquez is an open source metadata service. It maintains <a href="https://en.wikipedia.org/wiki/Provenance#Data_provenance">data provenance</a>, shows how datasets are consumed and produced, provides global visibility into job runtimes, centralizes dataset lifecycle management, and much more.
                </p>
                <p className="my-5 text-lg px-6">
                    Marquez was released and open sourced by <strong><a href="https://www.wework.com">WeWork</a></strong>.
                </p>
            </div>
        </div> 
    )
}

const FeatureBoxes = ({ }) => {
    return (
        <div className="border-t-2 border-dashed border-color-2" >
            <div className="flex flex-wrap py-12 container mx-auto items-center">
                <div className="px-4 text-center lg:px-0 w-full order-0 lg:order-0">
                    <h2 className="relative text-3xl">
                        What does Marquez do?
                    </h2>
                </div>
                <div className="lg:py-14 px-4 lg:pr-12 lg:w-1/2 w-full order-0 lg:order-0">
                    <h3 className="text-color-1 text-xl text-center lg:text-left lg:text-2xl">
                        Real-time metadata collection
                    </h3>
                    <p className="mt-5 text-center lg:text-left">
                        Marquez is a metadata server, offering an OpenLineage-compatible endpoint for real-time collection of information from running jobs and applications.
                    </p>
                    <p className="mt-5 text-center lg:text-left">
                        As the reference implementation of OpenLineage, the Marquez API server already works with all of its integrations developed by the community. This includes Apache Airflow, Apache Spark, dbt, Dagster, and Great Expectations. 
                    </p>
                </div>
                <div className="py-12 lg:py-14 px-4 lg:w-1/2 w-full order-1 lg:order-1 ">
                    <img
                        src="/images/stack.svg"
                        alt=""
                        className="w-full max-w-none"
                    />
                </div>
                <div className="py-12 lg:py-14 px-4 lg:pl-12 lg:w-1/2 w-full order-2 lg:order-3">
                    <h3 className="text-color-1 text-xl lg:text-2xl text-center lg:text-left">
                        Unified visual graph
                    </h3>
                    <p className="mt-5 text-center lg:text-left">
                        Through a web user interface, Marquez can provide a visual map that shows <strong>complex interdependencies</strong> within your data ecosystem.
                    </p>
                    <p className="mt-5 text-center lg:text-left">
                        The user interface allows you to browse the metadata within Marquez, making it easy to see the inputs and outputs of each job, trace the lineage of individual datasets, and study performance metrics and execution details.
                    </p>
                </div> 
                <div className="py-12 lg:py-14 px-4 lg:w-1/2 w-full order-3 lg:order-2">
                    <img
                        src="/images/screenshot.png"
                        alt=""
                        className="w-full max-w-none lg:pr-12"
                    />
                </div>
                <div className="py-12 lg:py-14 px-4 lg:pr-12 lg:w-1/2 w-full order-4 lg:order-4">
                    <h3 className="text-color-1 text-xl lg:text-2xl text-center lg:text-left">
                        Flexible Lineage API
                    </h3>
                    <p className="mt-5 text-center lg:text-left">
                        Lineage metadata can be queried using the lineage API, allowing for automation of key tasks like backfills and root cause analysis.
                    </p>
                    <p className="mt-5 text-center lg:text-left">
                        With the Lineage API, you can easily traverse the dependency tree and establish context for datasets across multiple pipelines and orchestration platforms. This can be used to enrich data catalogs and data quality systems.
                    </p>
                </div>
                <div className="py-12 lg:py-14 px-4 lg:w-1/2 w-full order-5 lg:order-5">
                    <img
                        src="/images/api-terminal.png"
                        alt=""
                        className="w-full max-w-none"
                    />
                </div>
            </div>
        </div>
    )
}

const Blog = ({ children }) => {
    return (
        <div className="border-t-2 border-dashed border-color-2">
            <div className="container mx-auto px-0 pb-24">
                <div className="px-4 py-12 text-center lg:py-14 lg:px-0">
                    <h2 className="text-color-1 text-3xl lg:text-4xl">
                        Latest News
                    </h2>
                </div>
                <div className="flex flex-wrap">{children}</div>
            </div>
        </div>
    )
}

export const query = graphql`
    query IndexPageQuery {
        site: site {
            siteMetadata {
                title
                description
                capitalizeTitleOnHome
                titleImage
                ogImage
                twoColumnWall
                introTag
                description
            }
        }
        integration: allMdx(
            filter: { fields: { sourceName: { eq: "integration" } } }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        author
                        date(formatString: "DD MMMM YYYY")
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
