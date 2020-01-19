const path = require('path')

module.exports = {
  target: 'serverless',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  env: {
    LANGUAGES:
      [{
        locale: "en-us",
        slug: "en",
        label: "english",
        default: false,
        root: "/en/"
      },
      {
        locale: "fi",
        slug: "fi",
        label: "suomi",
        default: true,
        root: "/"
      }

      ],
    GTAG_ID: "UA-150124399-1"
  }

}
