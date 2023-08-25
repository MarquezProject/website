import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { NavigationListQuery } from "./__generated__/NavigationListQuery"
import { Theme } from "./layout"

type NavigationListProps = { name?: string, className?: string, liClassName?: string, current?: string, withThemeSwitch?: boolean, currentTheme?: number, switchTheme?: () => void, themes?: Theme[] }
const List: React.FC<NavigationListProps> = ({
    name,
    className = "",
    liClassName = "",
    current,
    withThemeSwitch = true,
    currentTheme,
    switchTheme,
    themes,
}) => {
    const data = useStaticQuery<NavigationListQuery>(graphql`
        query NavigationListQuery {
            site {
                siteMetadata {
                    navLinks {
                        name
                        url
                    }
                    darkmode
                    switchTheme
                }
            }
        }
    `)
    const items = data.site.siteMetadata.navLinks
    const list = items.map((e, i) => (
        <ListItem
            key={`navigation-${name}-${i}`}
            data={e}
            active={`/${current}` === e.url}
            liClassName={liClassName}
        />
    ))

    if (withThemeSwitch) {
        const themeButtons = themes.map((item, i) => {
            const next = i !== themes.length - 1 ? i + 1 : 0
            return (
                <button
                    className={`navigation-list-btn ${
                        i === currentTheme ? "navigation-list-btn-theme" : "navigation-list-btn-no-theme"
                    }`}
                    title={`Switch to ${themes[next].label}`}
                    key={`${name}-theme-switch-btn-${item.name}`}
                    onClick={switchTheme}
                >
                    {item.icon}
                </button>
            )
        })
        list.push(
            <li
                className="theme-switcher"
                key={`${name}-theme-switcher relative`}
            >
                {themeButtons}
            </li>
        )
    }

    return <ul className={className}>{list}</ul>
}

const ListItem = ({ data, active, liClassName }) => {
    return (
        <li className={`${liClassName} ${active ? "active" : ""}`}>
            <Link to={data.url} title={data.name} className="navigation-list-link">
                <span>{data.name}</span>
            </Link>
        </li>
    )
}

export default List
