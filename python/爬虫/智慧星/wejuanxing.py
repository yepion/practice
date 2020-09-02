import requests,random,time




url = 'https://www.wjx.cn/joinnew/processjq.ashx?curid=88051153&starttime=2020%2F8%2F14%2020%3A11%3A24&source=directphone&submittype=1&ktimes=26&hlv=1&rn=3747487577.04495153&jpm=2&t=1597407102072&jqnonce=fd340974-696f-4ed9-8554-a4530ac30989&jqsign=%60b526%3F12%2B0%3F0%60%2B2cb%3F%2B%3E332%2Bg2356ge56%3F%3E%3F'
headers = {
'Connection': 'keep-alive',
'Content-Length': '188',
'Accept': 'text/plain, */*; q=0.01',
'X-Requested-With': 'XMLHttpRequest',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Origin': 'https://www.wjx.cn',
'Sec-Fetch-Site': 'same-origin',
'Sec-Fetch-Mode': 'cors',
'Referer': 'https://www.wjx.cn/m/88051153.aspx',
'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',

}

data = 'submitdata=1%241%7D2%241%7D3%243%7D4%242%7D5%244%7D6%243%7D7%242%7D8%244%7D9%243%7D10%244%7D11%243%7D12%241%7D13%243%7D14%242%7D15%243%7D16%243%7D17%243%7D18%244%7D19%244%7D20%244%7D21%243'

with open('ip.txt','r') as f:
    proxies_list =f.read().split('\n')

    while (True):
        ran = random.randint(0, len(proxies_list)-1)
        print('*'*100)
        print(ran)
        ip = proxies_list[ran].split(':')[0]
        port = proxies_list[ran].split(':')[1]
        proxies = {
            'http': 'http://{}:{}'.format(ip, port),
            'https': 'https:{}:{}'.format(ip, port)
        }

        print(proxies)
        try :
            res = requests.post(url,headers=headers,data=data,proxies=proxies)
            # print(res)
            print(res.text)
            time.sleep(1)
        except requests.exceptions.RequestException as e :
            print('error',e.args)