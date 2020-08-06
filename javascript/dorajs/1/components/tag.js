module.exports = {
    type: 'list',
    style: 'simple',
    async fetch({ args, page }) {
        if (args.keyword){
            url = `http://ios.bxguwen.com/search?page=${page || 1}&wd=${encodeURI(args.keyword)}`
            res = await $http.get(url)
        }
        else {
            res = await $http.get(`http://ios.bxguwen.com/vod/listing${args.tag}${page || 1}`)
        }
        // console.log(typeof res.data)

        data = JSON.stringify(res.data)
        // console.log('json>>>>>>>>>>>>>>>>>>>>>\n'+data)
        data = JSON.parse(data)
        // console.log('dddddddddddddddddd  json'+data.data.vodrows)
        // console.log(typeof data)
        li = data.data.vodrows
        let items = []
        li.forEach(item => {
            let title = item.title
            let pic = item.coverpic
            let url = item.play_url
            let tag = ''
            item.tags.forEach(i =>{
                tag+=i.tagname+' '
            })
            // console.log(typeof tag);
            // console.log(tag);
            // console.log(url)
            items.push({
                title : title,
                image :pic,
                style : 'vod',
                route : $route('play',{
                    url : url,
                    img : pic,
                })

            })


        });
        console.log(page)
        return {
            nextPage : (page || 1)  + 1,
            items :items 
        }

    }
  }