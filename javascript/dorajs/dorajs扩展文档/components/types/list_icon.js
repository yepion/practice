module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
        title: 'icon',
        style: 'icon',
        image: $icon('face', 'red')
      },
      {
        title: 'icon',
        style: 'icon',
        image: $icon('code')
      },
      {
        title: 'icon',
        style: 'icon',
        image: $icon('build', 'green')
      },
    ]
  }
}
