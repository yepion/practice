from requests import Session
import requests

s = Session()

url = "https://qd-yqcj.cqut.edu.cn/home/mrrw?yqrwdm=-1"
url2 = 'https://qd-yqcj.cqut.edu.cn/'

cookie = ".ASPXAUTH=AB19866E53BD08BEF4A65F492E99393DBFCDB473D41B5F7414216B7F33FD7B1D7B1040B5C9B56267F5C344B5F2CE17A48C1789E8583CA84899A15501BCB470C44C2F033C9DE9943744B7F5AE5EC39298F71BE0E7A635857FF8D9640720B1372B863AC09C7D43AB2E5FC5CBD9B394413656CA01CE4EDD6952E188FE5596925441BA16B82F31067B6315DF7B95ECE69A8C"
data = 'dtk=%7B%22_danxuanti%22%3A%5B%7B%22key%22%3A70%2C%22value%22%3A%22145%22%7D%2C%7B%22key%22%3A71%2C%22value%22%3A%22150%22%7D%2C%7B%22key%22%3A72%2C%22value%22%3A%22154%22%7D%2C%7B%22key%22%3A73%2C%22value%22%3A%22159%22%7D%2C%7B%22key%22%3A74%2C%22value%22%3A%22161%22%7D%2C%7B%22key%22%3A75%2C%22value%22%3A%22164%22%7D%2C%7B%22key%22%3A76%2C%22value%22%3A%22166%22%7D%5D%2C%22_duoxuanti%22%3A%5B%5D%2C%22_tiankongti%22%3A%5B%5D%2C%22_diliweizhiti%22%3A%5B%5D%2C%22_shijianti%22%3A%5B%5D%2C%22_xingzhengquhuati%22%3A%5B%5D%7D; mrrw_version=1004'

headers = {
'authority': 'qd-yqcj.cqut.edu.cn',
'method': 'GET',
'path': '/home/mrrw?yqrwdm=-1',
'scheme': 'https',
'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
'accept-encoding': 'gzip, deflate, br',
'accept-language': 'zh-CN,zh;q=0.9',
    'cookie' : cookie,
'referer': 'https://qd-yqcj.cqut.edu.cn/',
'sec-fetch-dest': 'document',
'sec-fetch-mode': 'navigate',
'sec-fetch-site': 'same-origin',
'sec-fetch-user': '?1',
'upgrade-insecure-requests': '1',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
}

try :
    res = s.get(url=url,headers = headers)
    print(res.text)
except requests.RequestException as e:
    print('error',e)
