const siteMetadata = {
    title: `Marquez`,
    siteUrl: `https://marquezproject.ai`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo-lfai.svg`,
    icon: `/images/icon.svg`,
    titleImage: ``,
    ogImage: `/images/cover.jpg`,
    twoColumnWall: true,
    cookiePolicy: false,
    introTag: `Collect, aggregate, and visualize a data ecosystem's metadata`,
    author: `@marquezproject`,
    blogItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Quickstart",
            url: "/quickstart",
        },
        {
            name: "FAQ",
            url: "/resources/faq",
        },
        {
            name: "Resources",
            url: "/resources",
        },
        {
            name: "Blog",
            url: "/blog",
        },
    ],
    footerLinks: [
        {
            name: "Mastodon",
            url: "https://fosstodon.org/@marquez",
            rel: "me",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/MarquezProject",
            rel: "",
        },
        {
            name: "Slack",
            url: "https://bit.ly/MqzSlack",
            rel: "",
        },
        {
            name: "GitHub",
            url: "https://github.com/MarquezProject/marquez",
            rel: "",
        },
        {
            name: "Wiki",
            url: "https://bit.ly/MarquezMeet",
            rel: ""
        },
        {
            name: "YouTube",
            url: "https://bit.ly/MarquezYouTube",
            rel: ""
        }
    ],
}


const defaults = {
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: false,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata }
