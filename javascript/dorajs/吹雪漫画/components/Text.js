const $ = cheerio.load(str,{decodeEntities:false})
   

let list = $('#dmList > ul > li')
    
// console.log(list)li
list.each((index,li) =>{
  let title = $('dl > dt >a',li).text()
  let summary = $('dl > dd > p:nth-child(1) > span',li).text()//更新时间
  let label = $('dl > dd > p:nth-child(2) > span',li).text() //最新话
  let image = $('p >a >img',li).attr('_src')
  let url = $(' p > a',li).attr('href')
  // console.log(title+'1111')

  items.push({
    'title': title,
    'summary': summary,
    'style': 'vod',
    'image': image,
    'label': label,
    'route': $route('list', {
      url: url
    })
  })



 })

return items

