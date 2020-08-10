import requests
import re
from lxml import html
etree = html.etree
pattern = re.compile('^八.*?')

# url管理
class UrlManger(object):
    def __init__(self):
        self.new_url = []
        self.old_url = []
    def get_new_url(self):
        url = self.new_url.pop()
        self.old_url.append(url)
        return url
    def add_url(self, url):
        if url not in self.old_url or self.new_url:
            self.new_url.append(url)
    def get_new_size(self):
        return len(self.new_url)

class Download(object):
    def request(self,url):
        headers = {
            # 'cookie': 'Hm_lvt_e98844d9ac0433bc2874821a90156663 = 1595471381, 1595555326;Hm_lpvt_e98844d9ac0433bc2874821a90156663 = 1595562702;laravel_session = eyJpdiI6ImszQjNtQUdVdUJ0Nm94azF3V3lBVGc9PSIsInZhbHVlIjoiUVZUK3A5M3k3WVlxR0dyOHBZXC85TkNKZ0c4N2VJTExPNGFaY3BEcVZqMG9ndVBnMmlyZkdCZTRtNjA4bjFaNTkiLCJtYWMiOiJiZWFhMTNiZmYxYmI5MmUzZTY3YzQ2YjY4YmMyYzliNDNiMGNkNGIyZjdkOTI2ZjgxNTY3NmQ2NTJkNTJlM2JiIn0 % 3D',
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36"
        }
        response = requests.get(url=url)
        if response.status_code ==200:
            return response.text
        else:
            print(response.status_code)
            print('*****************************error******************************')
            return None

class Parser:
    def parser(self,html):
        # e = etree.parse(html)
        e = etree.HTML(html)
        datas =self.parser_info(e)
        url = self.parser_utl(e)
        # print(url)
        return datas,url
    def parser_info(self,e):
        title = e.xpath('//div[@class="bookname"]/h1/text()')
        info = e.xpath('//div[@id="content"]/text()')
        return {
            'title':title,
            'info':info
        }
    def parser_utl(self,e):
        url = e.xpath('//div[@class="bottem2"]/a[4]/@href')
        return ('https://www.81zw.us{}'.format(url[0]))

#用正则表达式去除字符指定字符串，匹配到返回1
def re_(info):
    patterns = ['^八一.*','^天才一秒.*']
    for pattern in patterns:
        judge = 1
        if re.match(pattern,info):
            judge = 0
            break
    return judge
def save_novel(data):
    with open('大王饶命.txt','a',encoding='utf-8') as f:
        print(data['title'])
        f.writelines(data['title'])
        f.write('\n\n')
        for li in data['info']:
            if not re_(li):
                pass
            else:
                # print(li)
                f.write(li+'\n')

def main():
    url = 'https://www.81zw.us/book/11307/6654312.html'
    um = UrlManger()
    dl = Download()
    par =Parser()
    um.add_url(url)
    count = 1
    while um.get_new_size() !=0:
        url = um.get_new_url()
        print(count)
        count +=1
        html = dl.request(url)
        datas,url = par.parser(html)
        if url not in 'https://www.81zw.us/book/11307/':
            um.add_url(url)
            # print(url)
        save_novel(datas)
if __name__ == '__main__':
    main()
