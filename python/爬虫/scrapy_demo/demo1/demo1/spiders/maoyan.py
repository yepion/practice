import scrapy


class MaoyanSpider(scrapy.Spider):
    name = 'maoyan'
    allowed_domains = ['maoyan.com']
    start_urls = ['https://maoyan.com/films?showType=3']

    def parse(self, response):
        names = response.xpath('//dd/div[@class="channel-detail movie-item-title"]/a/text()').extract()
        scores =response.xpath('//dd/div/i/text()').extract()
        #将评分个位数与小数拼接
        scores = map(lambda x: x[0]+x[1],zip(scores[::2],scores[1::2]))
        for name,score in zip(names,scores):
            # print(name,':',score)
            yield {
                'name':name,
                'score':score
            }
