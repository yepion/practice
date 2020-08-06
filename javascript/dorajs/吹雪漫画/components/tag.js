const cheerio = require('cheerio')
let axios = require('axios');
let iconv = require('iconv-lite');
module.exports = {
  type: 'list',
  async fetch({args,page}) {
    let items = []
    let pg = (page || 1) == '1'? '' : `/index_${page || 1}.html`

    url=`http://www.chuixue.net${args.tag}${pg}`
    console.log(url)



    


    axios({
        'url' : url,
        responseType : 'stream' //将数据转化为流返回
    })
    .then(res=>{
      //此时的res.data 则为stream
        let chunks = [];
        res.data.on('data',chunk=>{
            chunks.push(chunk);
        });
        await res.data.on('end',()=>{
            let buffer = Buffer.concat(chunks);
            //通过iconv来进行转化。
            let str = iconv.decode(buffer,'gbk');
            // console.log(str);
                    // console.log(res.data)
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
        


    })
    console.log(items)
    })

  }
}