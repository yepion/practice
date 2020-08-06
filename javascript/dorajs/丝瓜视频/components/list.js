module.exports = {
    async fetch({args,page}) {
      this.allowBookmark = true
        let resp = await $http.get(baseURL+`${args.type}/${args.id}?orderby=&page=${page || 1}`)
        let list = resp.data.rescont.data
    let items = list.map(data => {
        return {
          title: data.authername,
          style: 'live',
          spanCount: 12,
          label:data.auther_no,
          image: data.coverpath,
          author:{name:data.title},
          route: $route('player', {
            id:data.id,
            title:data.title
          })
        }
      })
    return {
      nextPage: (page || 1) + 1,
      items: items
    }
  }
}