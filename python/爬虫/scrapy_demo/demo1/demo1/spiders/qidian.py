import scrapy


class QidianSpider(scrapy.Spider):
    name = 'qidian'
    allowed_domains = ['qidian.com']
    start_urls = ['https://www.qidian.com/rank/yuepiao?style=1']

    def parse(self, response):
        book_name = response.xpath('//li/div[@class="book-mid-info"]/h4/a/text()').extract()
        author = response.xpath('//li/div[@class="book-mid-info"]/p/a[@class="name"]/text()').extract()
        print(book_name)
        print(author)
        book = []
        for name,author in zip(book_name,author):
            book.append({'name':name,'author':author})
        return book
