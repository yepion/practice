module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      title: 'Chips title',
      style: 'chips',
      actions: [{
          title: 'Action 1'
        },
        {
          title: 'Action 2'
        },
        {
          title: 'Action 3'
        },
        {
          title: 'Action 4'
        }
      ]
    }]
  }
}
