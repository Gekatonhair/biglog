module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'loftwood-design',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-less',
        'gatsby-plugin-root-import',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/static/images',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svgs/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-breadcrumb',
            options: {
                defaultCrumb: {
                    location: {
                        pathname: '/',
                    },
                    crumbLabel: 'Главная',
                    crumbSeparator: ' /',
                },
            },
        },
    ],
};
