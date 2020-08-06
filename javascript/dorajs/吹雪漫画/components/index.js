module.exports = {
  type: 'bottomTab',

  fetch() {

    return [
      {
        title : '首页',
        image : $icon('home'),
        route : $route('home')
      }
    ]
  }
}
