import requests,json


class Scr():
    def __init__(self):
        self.page = 50
        self.baseurl = 'http://ios.bxguwen.com/vod/listing-4-0-0-0-0-0-0-0-0-'
    def getjson(self,page):
        url = self.baseurl+str(page)
        res = requests.get(url)
        res = json.loads(res.content)['data']['vodrows']
        return res
    def getpage(self,page):
        res = self.getjson(page)

        for i in res:
            # print(i)
            url = 'http://ios.bxguwen.com'+i['play_url']
            # print(url)
            res2 = requests.get(url)
            # print(json.loads(res2.content)['data'])
            res2 = json.loads(res2.content)['data']
            if ('httpurl' in res2):
                url1 = res2['httpurl']
            elif('httpurl_preview' in res2):
                url1 = res2['httpurl_preview'].replace('?300','')
            else:
                print('not find')
                url1 = 'error'
            # print(url)
            yield url1
    def saveurl(self,url):
        with open('movie.txt','a') as f:
            f.write(url+'\n')

    def start(self):
        for k in range(1,self.page+1):
            print(k)
            for url in  self.getpage(k):
                self.saveurl(url)
scr= Scr()
scr.start()