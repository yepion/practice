import requests
from lxml.html import etree
###tobody标签有bug，xpath解析不了
def request_http(page):
    url = 'http://www.66ip.cn/{}.html'.format(page)
    res = requests.get(url)
    return res.content.decode('gbk')

def parseHtml(res):
    e = etree.HTML(res)
    ip_list = e.xpath('//table//tr/td[1]/text()')
    port_list = e.xpath('//tr/td[2]/text()')
    ip_list = ip_list[3:]
    port_list = port_list[1:]
    # print(ip_list)
    # print(port_list)
    if (len(ip_list)==len(port_list)):
        for ip,port in zip(ip_list,port_list):
            yield {"ip":ip,"port" :port}

def verify_ip(item):
    # print('*'*8)
    print(item)
    proxies = {
        'http': 'http://{}:{}'.format(item['ip'],item['port'])
    }
    # print(proxies)
    try:
        res = requests.get('http://httpbin.org/get', proxies=proxies,timeout=(1,1))
        print(res.text)
        if res.status_code==200:
            with open('ip.txt','a') as f:
                f.write('{}:{}'.format(item['ip'],item['port'])+'\n')
    except requests.exceptions.RequestException as e:
        # print("error",e.args)
        pass

def main():
    for i in range(2,100):
        res = request_http(i)
        for item in parseHtml(res):
            verify_ip(item)


if __name__ == '__main__':
    main()