module.exports= {
    async fetch(){
        
        $http.defaults.withCredentials = true
        let config = {
            
            headers : {
                'User-Agent' : 'chrome',
                cookie : 'sdfaASFDadsfsdfsd',
            }
        }
        $http.post('https://qd-yqcj.cqut.edu.cn/home/tjdtk',config)
        .then(res=>{
            console.log('-----------------')
            console.log(res)
        })
    }
}