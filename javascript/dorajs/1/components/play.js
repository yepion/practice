module.exports = {
    type: 'video',
    async fetch({args}) {
        let url = `http://ios.bxguwen.com${args.url}`
        // console.log(url)

      //下面的config没个屁用，没搞清楚怎么伪装cookie
        let config = {
          Headers : {
            "cookie" : "xxx_api_auth=6164316364363466393264323530663566373636303730346632666236643663",
          }
        }
        let res = await $http(url,config) 
        // console.log(res)
        console.log('****************************************')
        // console.log('>>>>>>>>>'+JSON.stringify(res.data))
        // console.log(typeof res.data)
        let playUrl = res.data.data.httpurl  || res.data.data.https
        if (playUrl==null){
          data = JSON.stringify(res.data)
          data = JSON.parse(data)
          if(typeof(data.data.httpurl_preview)=='string'){
            playUrl = data.data.httpurl_preview.replace('?300','')
          }
          else{
            $ui.alert('这个视频在香蕉视频要充钱，你的明白？')
            console.log('>>>>Not find playUrl<<<<');
          }
          
        
        }
        
        if (playUrl){
          console.log('>>>>>>>>'+playUrl+'<<<<<<<<<<<<<<<<<<<<')
          $ui.toast('wdnmd少看点片')
        }
      return {
        url: playUrl
      }
    }
  }