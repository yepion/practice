const cheerio = require('cheerio')
module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    let res = await $http.get(`${baseurl}${args.url}`)
    const $ = cheerio.load(res.data)
    let items = [
      {
        title: this.title,
        style: 'richContent',
        content: {
          markdown: `<img src="${$('.bpic.l > img').attr(
            'src'
          )}" width = "120" height = "120" div align=right />         ${this.title}  
 更新至：${$('.info.l > ul:nth-child(1) > li:nth-child(2)>p>em').text()}  
 漫画分类：${$('.info.l > ul:nth-child(1) > li:nth-child(3)>p>a').text()}   
 漫画作者：${$('.info.l > ul:nth-child(1) > li:nth-child(4)>p').text()}  
 最后更新：${$('.info.l > ul:nth-child(1) > li:nth-child(6)>p').text()}
 `
        }
      }
    ]
    let list = $('#tabxinfan_1_tab_1 > div > div > h2,.jslist01>li')
    list.each((index, li) => {
      let url = $('a', li).attr('href')
      if (url) {
        let title = $('a', li).text()
        let summary = $('span>i', li).text()
        items.push({
          title: title + '   ' + summary,
          style: 'label',
          route: $route('detail', {
            url: url
          })
        })
      } else {
        items.push({
          title: $(li).text(),
          style: 'category'
        })
      }
    })
    return items
  }
}
