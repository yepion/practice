import requests
import json


# baseurl = 'http://ios.bxguwen.com/vod/listing-4-0-0-0-0-0-0-0-0-1'
#
# res = requests.get(baseurl)
# res = json.loads(res.content)['data']['vodrows']
# for i in res:
#     print(i['play_url'])
# # print(json.dumps(res,indent=2, ensure_ascii=False))

res2 = requests.get('http://ios.bxguwen.com/vod/reqplay/46716')
res2 = json.loads(res2.content)['data']['httpurl']
print(res2)