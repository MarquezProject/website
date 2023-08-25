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
            className="wall"
        >
            <div className="wall-div">
                <div className="wall-img-div">
                    <img
                        src="/images/screenshot.svg"
                        alt=""
                        className="wall-img"
                    />
                </div>
            </div>
            <div className="wall-text">
                <div className="title">
                    <h1 className="wall-text-slogan">
                        Data lineage for <span className="nowrap">every pipeline</span>
                    </h1>
                </div>
                <p className="wall-text-cta">
                    Use Marquez to collect, aggregate, and visualize metadata about your data pipelines and applications.
                </p>
                <div className="wall-text-btns-div">
                    <Button
                        title="Quickstart"
                        to='/quickstart'
                        type="link"
                        iconRight={<ArrowRight />}
                        className="wall-text-btn"
                    />
                    <Button
                        title="GitHub"
                        to='https://github.com/MarquezProject/marquez'
                        type="extbutton"
                        iconRight={<GitHub />}
                        className="wall-text-btn"
                    />
                    <Button
                        title="Slack"
                        to='https://bit.ly/MqzSlackInvite'
                        type="extbutton"
                        iconRight={<Slack />}
                        className="wall-text-btn"
                    />
                </div>
            </div>
        </div>
    )
}

const About = ({ }) => {
    return (
        <div className="about-div" >
            <div className="about-div-inner">
                <h2 className="about-div-q">
                    What is Marquez?
                </h2>
                <p className="about-div-a1">
                    Marquez is an open source metadata service. It maintains <a href="https://en.wikipedia.org/wiki/Provenance#Data_provenance">data provenance</a>, shows how datasets are consumed and produced, provides global visibility into job runtimes, centralizes dataset lifecycle management, and much more.
                </p>
                <p className="about-div-a2">
                    Marquez was released and open sourced by <strong><a href="https://www.wework.com">WeWork</a></strong>.
                </p>
            </div>
        </div> 
    )
}

const FeatureBoxes = ({ }) => {
    return (
        <div className="feature-boxes-div" >
            <div className="feature-boxes-div-inner">
                <div className="feature-boxes-div-title">
                    <h2 className="feature-boxes-div-title-h2">
                        What does Marquez do?
                    </h2>
                </div>
                <div className="feature-boxes-div-rtm">
                    <h3 className="feature-boxes-div-title">
                        Real-time metadata collection
                    </h3>
                    <p className="feature-boxes-div-para">
                        Marquez is a metadata server, offering an OpenLineage-compatible endpoint for real-time collection of information from running jobs and applications.
                    </p>
                    <p className="feature-boxes-div-para">
                        As the reference implementation of OpenLineage, the Marquez API server already works with all of its integrations developed by the community. This includes Apache Airflow, Apache Spark, dbt, Dagster, and Great Expectations. 
                    </p>
                </div>
                <div className="feature-boxes-div-rtm-img">
                    <img
                        src="/images/stack.svg"
                        alt=""
                        className="fb-img"
                    />
                </div>
                <div className="feature-boxes-div-uvg">
                    <h3 className="feature-boxes-div-title">
                        Unified visual graph
                    </h3>
                    <p className="feature-boxes-div-para">
                        Through a web user interface, Marquez can provide a visual map that shows <strong>complex interdependencies</strong> within your data ecosystem.
                    </p>
                    <p className="feature-boxes-div-para">
                        The user interface allows you to browse the metadata within Marquez, making it easy to see the inputs and outputs of each job, trace the lineage of individual datasets, and study performance metrics and execution details.
                    </p>
                </div> 
                <div className="feature-boxes-div-uvg-img">
                    <img
                        src="/images/screenshot.png"
                        alt=""
                        className="uvg-img"
                    />
                </div>
                <div className="feature-boxes-div-api">
                    <h3 className="feature-boxes-div-title">
                        Flexible Lineage API
                    </h3>
                    <p className="feature-boxes-div-para">
                        Lineage metadata can be queried using the lineage API, allowing for automation of key tasks like backfills and root cause analysis.
                    </p>
                    <p className="feature-boxes-div-para">
                        With the Lineage API, you can easily traverse the dependency tree and establish context for datasets across multiple pipelines and orchestration platforms. This can be used to enrich data catalogs and data quality systems.
                    </p>
                </div>
                <div className="feature-boxes-div-api-img">
                    <img
                        src="/images/api-terminal.png"
                        alt=""
                        className="fb-img"
                    />
                </div>
            </div>
        </div>
    )
}

const Blog = ({ children }) => {
    return (
        <div className="blog-div">
            <div className="blog-div-inner">
                <div className="blog-div-title-div">
                    <h2 className="blog-div-title">
                        Latest News
                    </h2>
                </div>
                <div className="blog-div-children">{children}</div>
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
