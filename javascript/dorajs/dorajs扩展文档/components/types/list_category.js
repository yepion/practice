module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
        title: '分类1',
        style: 'category'
      },
      {
        title: 'Label 1',
        style: 'label'
      },
      {
        title: '分类2',
        style: 'category'
      },
      {
        title: 'Label 2',
        style: 'label'
      },
    ]
  }
}
