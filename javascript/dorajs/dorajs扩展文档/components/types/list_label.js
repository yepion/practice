module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [ // label
      {
        title: 'Label 1',
        style: 'label'
      },
      {
        title: 'Label 2',
        style: 'label'
      },
      {
        title: 'Label 3',
        style: 'label'
      },
      {
        title: 'Label 4',
        style: 'label'
      },
    ]
  }
}
