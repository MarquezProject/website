import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Calendar } from "react-feather"
import { BlogListQuery_allMdx_edges_node } from "../templates/__generated__/BlogListQuery"
import { IndexPageQuery_blog_edges_node } from "../pages/__generated__/IndexPageQuery"

type ItemBlogProps = BlogListQuery_allMdx_edges_node | IndexPageQuery_blog_edges_node
export const ItemBlog: React.FC<{ data: ItemBlogProps}> = ({ data }) => {

    const [focused, changeFocused] = useState(false);

    return (
        <div className="item-blog-div">
            <Link to={data.fields.slug} title={data.frontmatter.title}>
                <div className="image">
                    {data.frontmatter.image.publicURL.endsWith('.svg') ?
                    <img src={data.frontmatter.image.publicURL} alt={data.frontmatter.title} className="w-full" /> :
                    <Img fluid={data.frontmatter.image.childImageSharp?.fluid} alt={data.frontmatter.title} className="w-full" />}
                </div>
                <div className="item-blog-frontmatter-outer-div">
                    <h4 className="item-blog-frontmatter-title">
                        {data.frontmatter.title}
                    </h4>
                    <div className="item-blog-frontmatter-inner-div">
                        <Calendar className="item-blog-frontmatter-calendar"/>
                        <p className="item-blog-frontmatter-author-title">{data.frontmatter.date} by {data.frontmatter.author}</p>
                    </div>
                    <p className="item-blog-frontmatter-description">
                        {data.frontmatter.description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ItemBlog;