const pkg = require('../package')
module.exports = {
  title: pkg.name,
  description: pkg.description,
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      // add your markdown at docs folder
    ],
  },
}
