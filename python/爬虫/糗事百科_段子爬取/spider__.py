import requests
from threading import Thread
from queue import Queue
from lxml.html import etree

class spider_url(Thread):
    def __init__(self,url_queue,html_queue):
        Thread.__init__(self)
        self.url_queue = url_queue
        self.html_queue = html_queue
    def run(self):
        headers = {

            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36"
        }
        # while self.url_queue.empty == False:
        # print(self.url_queue.get())
        while not self.url_queue.empty():
            res = requests.get(self.url_queue.get(),headers=headers)
            # print(res.status_code)
            # print(res.text)
            self.html_queue.put(res.text)

class parse_html(Thread):
    def __init__(self,html_queue):
        Thread.__init__(self)
        self.html_queue = html_queue
    def run(self):
        text = self.html_queue.get()
        html = etree.HTML(text)
        print(html)
        result = html.xpath('//*[@class="article block untagged mb15 typs_hot"]/a/div[@class="content"]/span')
        for i in result:
            print(i.xpath('string(.)'))
            print(type(i.xpath('string(.)')))
        # print(result)

if __name__ == '__main__':
    base_url = 'https://www.qiushibaike.com/text/page/{}/'
    #url容器
    url_queue = Queue()
    #储存html的容器
    html_queue = Queue()

    for i in range(1,30):
        url = base_url.format(i)
        url_queue.put(url)
    # print(url_queue.get())
    # print(url_queue.empty())
    spider_list = []
    for i in range(8):
        spider = spider_url(url_queue,html_queue)
        spider_list.append(spider)
        spider.start()
    for i in spider_list:
        i.join()


    # for i in range(3):
    parse = parse_html(html_queue)
    parse.start()