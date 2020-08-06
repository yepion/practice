module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
        style: 'dashboard',
        image: $icon('memory'),
        title: '内存使用',
        summary: '1024 MB',
        color: '#8B355E',
        textColor: 'white'
      },
      {
        style: 'dashboard',
        image: $icon('battery_alert'),
        title: '电池使用',
        summary: '1024MB',
        color: '#81AF37',
        textColor: 'white'
      },
    ]
  }
}
