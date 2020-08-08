module.exports = {
    type: 'topTab',
    tabMode: 'fixed',
    fetch() {
      return [{
        title: 'text',
        image: $icon('home'),
        route: $route('first')
      }, {
        title: 'kong',
        image: $icon('tv'),
        route: $route('kong')
      }]
    }
  }