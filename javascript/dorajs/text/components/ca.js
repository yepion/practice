const cheerio = require('cheerio')
module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    
      let url = 'https://www.bnmanhua.com/page/new.html'
      res = await $http.get(url)
    const $ = cheerio.load(res.data)
    let items = []
    let list = $('.mb10.mt10>dl>*')
    list.each((index, li) => {
      let title = $( li).text()
      let summary = $('em', li).text()
      let label = $('span', li).text()     
      let url = $('a', li).attr('href')
      if(url){
      items.push({
        title: title,
        style: 'list',
        route: $route('tag', {
          tag: url.replace(/.html/g,"")
        })
      })      
      }            
    })
    i=[]
    i.push({
        title: '',
        style: 'chips',
        actions: items
      }
      
      )

      console.log(args)
      return i
    
    
  }
}
