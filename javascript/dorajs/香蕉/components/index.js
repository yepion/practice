module.exports = {
  type: 'bottomTab',
  async fetch({ args, page }) {
    return [
      {
        title : '首页',
        image : $icon('movie'),
        route : $route('home',{id : 'listiing'})
      }
    ]
  }
}
