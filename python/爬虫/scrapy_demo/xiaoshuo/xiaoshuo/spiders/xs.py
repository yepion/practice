import scrapy


class XsSpider(scrapy.Spider):
    name = 'xs'
    allowed_domains = ['81zw.us']
    start_urls = ['https://www.81zw.us/book/11307/6654312.html']

    def parse(self, response):
        title = response.xpath('//h1/text()').extract_first()
        content = ''.join(response.xpath('//div[@id="content"]/text()').extract()).replace('    ','\n')
        yield {
            'title':title,
            'content':content
        }
        next = response.xpath('//div[@class="bottem2"]/a[4]/@href').extract_first()
        url = response.urljoin(next)
        yield scrapy.Request(url=url, callback=self.parse)

