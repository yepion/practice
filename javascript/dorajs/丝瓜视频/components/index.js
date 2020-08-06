module.exports = {
    async fetch({args,page}) {
      this.allowBookmark = true
        let resp = await $http.get(baseURL+`videoplay/${args.id}?uuid=`+uuID)
        let labls = resp.data.rescont.labls
    let items = []
    items.push({
      thumb:resp.data.rescont.coverpath,
      style: 'gallery',
      author:{
        name:resp.data.rescont.authername,
      },
      route: $route('@image', {
        url:resp.data.rescont.coverpath,
    })
    },{
      style:'simple',
      title:resp.data.rescont.title,
      summary:resp.data.rescont.auther_no,
      image:$icon('play_arrow','black'),
      route: $route('@video', {
        url:resp.data.rescont.videopath,
    })

    })
    let tags = labls.map(data => {
        return {
          title: data.name,
          route: $route('list', {
            id:data.id,
            type:'videotopic'
          })
        }  
      })
    items.push({
      style:'chips',
      actions:tags
    })
    return {
      items: items,
      title:args.title
    }
  }
}