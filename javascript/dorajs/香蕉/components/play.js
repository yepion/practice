module.exports = {
    type: 'video',
    async fetch({args}) {
        let url = `http://ios.bxguwen.com${args.url}`
        // let res = await $http(url) 
     
        // console.log(typeof res.data.data.httpurl)
        let playUrl = res.data.data.httpurl  
        console.log(playUrl)
      return {
        url: playUrl
      }
    }
  }