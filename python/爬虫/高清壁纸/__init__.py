import requests
from bs4 import BeautifulSoup
import time
import os


def req_url(url):
    headers = {
        'User-Agent': 'Mozilla / 5.0(Windows NT 10.0;WOW64) AppleWebKit / 537.36(KHTML, likeGecko) Chrome / 83.0.4103.116Safari / 537.36'    }
    session = requests.Session()
    res = session.get(url,headers=headers)
    # print(res.content.decode('gbk'))
    return res.content.decode('gbk')

#图片主页列表
page_list = []
def parse_html(res):
    soup = BeautifulSoup(res,'lxml')
    ul = soup.find(name='ul',attrs='clearfix')
    for li in ul.find_all(name='li'):
        # print(li)
        for a in li.find_all(name='a'):
            # print(a.attrs['href'])
            # print(a.b.text)
            page_list.append('http://pic.netbian.com'+a.attrs['href'])


def parse_img_page():
    for url in page_list:
        res = req_url(url)
        # print(res)
        soup = BeautifulSoup(res,'lxml')
        # print(soup.a.img)
        img = soup.find(name='img',attrs={'data-pic':True}).attrs['src']
        img_url =   'http://pic.netbian.com/'+img
        name = soup.find(name='img',attrs={'data-pic':True}).attrs['title']
        yield (img_url,name)



def save_img(img_url,name):
    res = requests.get(img_url)
    if res.status_code == 200:
        open(name+'.jpg', 'wb').write(res.content)

def main():
    #网址页数列表
    url_list=[]
    url_list.append('http://pic.netbian.com/4kdongman/index.html')
    for i in range(2,5):
        base_url = 'http://pic.netbian.com/4kdongman/index_{}.html'
        url = base_url.format(i)
        url_list.append(url)
    #请求每页的网址
    for url in url_list:
        res = req_url(url)
        parse_html(res)
    # print(os.listdir())
    os.mkdir('./壁纸')
    os.chdir('./壁纸')
    i =0
    for img_url,name in parse_img_page():
        i+=1
        print(i)
        save_img(img_url,name)


if __name__ == '__main__':
    main()