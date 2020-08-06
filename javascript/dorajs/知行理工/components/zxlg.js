let result = '签到 '
function zxlg() {
    return new Promise(async resolve => {
        try {
            let config = {
    headers: {
        '_header' : 'POST /home/tjdtk h2',
        'Host':' qd-yqcj.cqut.edu.cn',
        'content-length': '359',
        'accept': 'application/json, text/plain, */*',
        'origin': 'https://qd-yqcj.cqut.edu.cn',
        'x-requested-with': 'XMLHttpRequest',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'referer': 'https://qd-yqcj.cqut.edu.cn/home/mrrw?yqrwdm=-1',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        "cookie":  '.ASPXAUTH=5A401BBAF421E112975A0BFC35F60301E8A3C1E5E5B2C6CFCD31B1BC030DB900D1E845742149CEEECDA782C7D80F21F81E3B4243B8106D262EE5332FB8D1EF1B7075C3BCEBF66FF420BECDC1B6AB361AC7BFA4BB4650CDCD162043BDB8655E7EC4601EB4BDF45AD4C2EDE8131794407C2581A0D6790AA6FDBEDC11F98641B728F3C566336E23198D95625D47D764C758' ||"" },
        'User-Agent':'Mozilla/5.0 (Linux; Android 10; PCT-AL10 Build/HUAWEIPCT-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36',
        'Content-Type': 'application/json;charset=UTF-8'
}
    let data ='{"yqrwdm":375,"dtk":"{\"_danxuanti\":[{\"key\":70,\"value\":\"145\"},{\"key\":71,\"value\":\"150\"},{\"key\":72,\"value\":\"154\"},{\"key\":73,\"value\":\"159\"},{\"key\":74,\"value\":\"161\"},{\"key\":75,\"value\":\"164\"},{\"key\":76,\"value\":\"166\"}],\"_duoxuanti\":[],\"_tiankongti\":[],\"_diliweizhiti\":[],\"_shijianti\":[],\"_xingzhengquhuati\":[]}"}'
res = await $http.post(`https://qd-yqcj.cqut.edu.cn/home/tjdtk`,data,config,sendData=true)
console.log(res)

 } catch (err) {
   result+="签到出错"
   console.log(err)
            //sgxc="登陆失败❗️❗️" + err.response.data.message+"\n"
        }
        resolve()
    })
}
async function task() {
    await zxlg()    
}
task()
module.exports = task