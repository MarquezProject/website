import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Logo } from "./utils"
import Navlinks from "./navigation-list"
import { FooterLinksQuery, FooterLinksQuery_site_siteMetadata_footerLinks } from "./__generated__/FooterLinksQuery"


export default function() {
    const query = useStaticQuery<FooterLinksQuery>(graphql`
        query FooterLinksQuery {
            site {
                siteMetadata {
                    title
                    footerLinks {
                        name
                        url
                        rel
                    }
                }
            }
        }
    `)

    const footerLinks = query.site.siteMetadata.footerLinks.map((item, _) => (
        <ListItem data={item} key={`footer-n-l-${_}`} />
    ))

    return (
        <footer className="footer-outer-div">
            <div className="footer-inner-div">
                <div
                    className="footerlinks"
                >
                    <ul>
                    {footerLinks} 
                    </ul>
                </div>
                <p className="footer-copyright">
                    Copyright &copy; {new Date().getFullYear()} The Linux Foundation<sup>®</sup>. All rights reserved.      
                </p>
            </div>
        </footer>
    )
}

const ListItem: React.FC<{ data: FooterLinksQuery_site_siteMetadata_footerLinks }> = ({ data }) => {
    return (
        <li className="footerlink-list">
            <Link to={data.url} title={data.name} rel={data.rel}>
                <span>{data.name}</span>
            </Link>
        </li>
    )
}
