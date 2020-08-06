module.exports = {
  type: 'bottomTab',
  searchRoute: $route('tag'),
  fetch() {
    let items = []
    
    return [
    {
      title:"首页",
      image:$icon('home', 'black'),
      route:$route("home")
    },
    {
      title:"分类",
      image:$icon('view_module', 'black'),
      route:$route("ca")
    }
    ]
      
    
  }
}
