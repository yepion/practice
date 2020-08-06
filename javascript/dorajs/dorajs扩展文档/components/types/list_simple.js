module.exports = {
  type: 'list',
  style: 'simple',
  async fetch({ args, page }) {
    return [{
        title: '样式：simple',
        style: 'category'
      },
      {
        title: 'Hello World!',
        style: 'simple'
      },
      {
        title: 'Hello World!',
        style: 'simple',
        summary: '一个简单的样式'
      },
      {
        title: 'Hello World!',
        style: 'simple',
        image: $icon('face', 'black'),
        summary: '一个简单的样式'
      }
    ]
  }
}
