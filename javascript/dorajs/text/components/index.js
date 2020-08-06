module.exports = {
    type: 'topTab',
    tabMode: 'fixed',
    fetch() {
      return [{
        title: '悟空',
        image: $icon('movie'),
        route: $route('first')
      }, {
        title: 'kong',
        image: $icon('tv'),
        route: $route('kong')
      }]
    }
  }