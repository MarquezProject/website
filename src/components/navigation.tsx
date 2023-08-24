import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { WindowLocation } from '@reach/router';

import { Logo } from "./utils"
import List from "./navigation-list"
import { Menu } from "react-feather"
import SideBar from "./sidebar"
import { NavigationQuery } from "./__generated__/NavigationQuery"
import { Theme } from "./layout"

type NavbarProps = { navPlaceholder: boolean, location: WindowLocation, currentTheme: number, switchTheme: () => void, themes: Theme[], allowThemeSwitch: boolean, front: boolean };
const Navbar: React.FC<NavbarProps> = ({ navPlaceholder, location, currentTheme, switchTheme, themes, allowThemeSwitch=true, front }) => {
    const currentLocation = location.pathname.split("/")[1]

    const data = useStaticQuery<NavigationQuery>(graphql`
        query NavigationQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const navbar = useRef(null)

    const [scrolled, changeState] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [sidebarOpen, setSidebarOpen] = useState(false)


    useEffect(() => {
        const onScroll = () => {
            if (document.documentElement.scrollTop > 50 && !scrolled) {
                changeState(true)
            } else if (document.documentElement.scrollTop <= 50 && scrolled)
                changeState(false)
        }

        window.addEventListener("scroll", onScroll)

        setNavbarHeight(navbar.current.getBoundingClientRect().height)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [scrolled])

    return (
        <React.Fragment>
            <div
                className={`navigation-outer-div nav ${
                    scrolled ? "navigation-outer-div-scrolled" : "navigation-outer-div-unscrolled"
                }`}
                ref={navbar}
            >
                <button
                    className="navigation-btn"
                    onClick={() => {
                        setSidebarOpen(true)
                    }}
                >
                    <Menu />
                </button>
                <SideBar open={sidebarOpen} onChange={setSidebarOpen}>
                    <div className="navigation-sidebar-outer-div">
                        <div className="navigation-sidebar-inner-div-1">
                            <Link to="/" title={data.site.siteMetadata.title} className="navigation-sidebar-link">
                                <Logo
                                    className={`navigation-sidebar-link-logo ${
                                        scrolled ? "navigation-sidebar-link-logo-scrolled" : "navigation-sidebar-link-logo-unscrolled"
                                    }`}
                                />
                            </Link>
                        </div>
                        <div className="navigation-sidebar-inner-div-2">
                            <List name="sidebar-nav" current={currentLocation}  currentTheme={currentTheme} switchTheme={switchTheme} themes={themes} withThemeSwitch={allowThemeSwitch} liClassName="navigation-sidebar-inner-div-2-list"/>
                        </div>
                    </div>
                </SideBar>
                <Link to="/" title={data.site.siteMetadata.title}>
                    <Logo
                        className={`navigation-link-logo ${
                            scrolled ? "navigation-link-logo-scrolled" : "navigation-link-logo-unscrolled"
                        }`}
                    />
                </Link>
                <div className="navigation-inner-div-1">
                    <List name="navbar" className="navigation-navbar" current={currentLocation} currentTheme={currentTheme} switchTheme={switchTheme} themes={themes} withThemeSwitch={allowThemeSwitch}/>
                </div>
                <div className="navigation-inner-div-2"></div>
            </div>
            {navPlaceholder && (
                <div style={{ height: `${navbarHeight}px` }}></div>
            )}
        </React.Fragment>
    )
}

export default Navbar
