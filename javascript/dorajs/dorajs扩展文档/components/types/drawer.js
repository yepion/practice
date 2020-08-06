module.exports = {
  type: 'drawer',
  items: [{
      title: '电影',
      image: $icon('movie'),
      route: $route('types/list')
    },
    {
      title: '电视剧',
      image: $icon('tv'),
      route: $route('types/webview')
    }
  ]
}
