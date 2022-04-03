// const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
// module.exports = withNextra()


// next.config.js
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra()