import requests

url = 'https://www.qiushibaike.com/text/page/1/'
res =requests.get(url)
print(res.text)

