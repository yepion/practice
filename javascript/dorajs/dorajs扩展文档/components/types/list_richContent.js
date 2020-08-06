const fs = require("fs");
module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
        title: 'README.md',
        style: 'richContent',
        content: {
          url: 'https://docs.dorajs.com/',
          markdown: this.readReadme()
        }
      },
      {
        title: '百度一下',
        style: 'richContent',
        content: {
          url: 'https://baidu.com/'
        }
      }
    ]
  },
  readReadme() {
    return fs.readFileSync('./README.md', {
      encoding: 'utf8'
    })
  }
}
