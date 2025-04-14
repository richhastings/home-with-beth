const client = require('./client')

module.exports = {
  images: {
    domains: ['cdn.sanity.io', 'placehold.it'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
