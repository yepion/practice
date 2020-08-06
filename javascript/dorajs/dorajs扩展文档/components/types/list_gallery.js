module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      title: 'gallery',
      style: 'gallery',
      image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
      author: {
        name: 'linroid',
        avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4'
      }
    }, ]
  }
}
