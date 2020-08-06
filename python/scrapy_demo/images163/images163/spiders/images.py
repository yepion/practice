import scrapy
from scrapy import Spider,Request
from urllib.parse import urlencode
from scrapy import Item,Field
import json


class ImageItem(Item):
    collection =table = 'images'
    id = Field()
    url = Field()
    title = Field()
    thumb = Field()


class ImagesSpider(scrapy.Spider):
    name = 'images'
    allowed_domains = ['images.so.com']
    start_urls = ['https://image.so.com/']

    def parse(self, response):
        result = json.loads(response.text)
        for image in result.get('list'):
            item = ImageItem()
            item['id'] = image.get('imaged')
            item['url'] = image.get('qhimg_url')
            item['title'] = image.get('title')
            item['thumb'] = image.get('qhimg_thumb')
            yield item


    def start_requests(self):
        data = {'ch':'photography','listtype':'new'}
        base_url = 'https://image.so.com/zjl?'
        for page in range(1,self.settings.get('MAX_PAGE')+1):
            data['sn'] = page*30
            params = urlencode(data)
            url = base_url + params
            yield Request(url,self.parse)