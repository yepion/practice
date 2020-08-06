module.exports = {
    type: 'article',
    async fetch({
        args,
        page
    }) {
        let res = await $http.get(`${baseurl}${args.url}`)
        let items = []
    
     
        let data = res.data.match(/var.+?var z_img='\[\".+?]/s)[0].replace(/z_img/, 'zimg')
       console.log(data)
        base = "https://img.yaoyaoliao.com/"
        let imgs = JSON.parse(data.match(/zimg='(\[\".+?])/)[1])
        let content = ''
        for (i = 0; i < imgs.length; i++) {
            content += `<img src="${base}${imgs[i]}" width =100% />`
        }
        //有点模糊 还是article吧
        /* imgs.map(img => {
             items.push({
              // title: list.title,
               image: `${base}${img}`,
               style: 'gallery',
            //   spanCount: 4,
             })
           })*/

        return {
            content: {
                html: content
            }
        }


        // return items
    }
}