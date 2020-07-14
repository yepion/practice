import requests
from requests import RequestException
import re

#猫眼电影网址
# url = "https://maoyan.com/board/4"
headers = {
"Cookie": '__mta=151762438.1594717520504.1594717571227.1594717577984.7; uuid_n_v=v1; uuid=23CD93E0C5B111EA954B6985CCA44FA8325DEA87B33B4948B31EAC665283CCBA; _csrf=23e6fc59ab87ec12ddeec1acd154b6ddd8d7fb27466e5298ffd757514a55cc11; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1594717520; _lx_utm=utm_source%3Dgoogle%26utm_medium%3Dorganic; _lxsdk_cuid=1734c923f75c8-00bd56880bda59-3b634504-144000-1734c923f75c8; _lxsdk=23CD93E0C5B111EA954B6985CCA44FA8325DEA87B33B4948B31EAC665283CCBA; mojo-uuid=0c9b8a20d567dc2b0bf3832f4b50f2cf; mojo-session-id={"id":"2deae06302d4b2a37f6067b6c852bcbf","time":1594717520273}; __mta=151762438.1594717520504.1594717520504.1594717542686.2; mojo-trace-id=11; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1594717578; _lxsdk_s=1734c923f76-dfd-80f-19b%7C%7C18',
"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36"
}


# 请求网页
def req_url(url,headers,i):

    url = url+'?offset='+str(i)
    try :
        res = requests.get(url,headers=headers)
        # print(res.status_code)
        # print(res.text)
        # print(url)
        return res.text
    except RequestException:
        print("request error")
        return None

# 保存电影信息的数组
info = []

# 处理网页
def parse_res(res):
    # print(res)
    pattern = '''.*?tle=(.*?)" dat.*?</p>
        <p class="star">
                (.*?)
        </p>
<p class="releasetime">上映时间：(.*?)</p>    </div>
    <div class="movie-item-number score-num">
<p class="score"><i class="integer">(.*?)</i></p>.*?'''
    result = re.findall(pattern,res)

    # 评分整数位和小数位分开中间有代码，下面是删除评分中的不要的东西
    for i in range(10):
        result[i] = list(result[i])
        result[i][3] = result[i][3].replace('</i><i class="fraction">','')
        result[i] = tuple(result[i])
        # print(result[i][3])
    # print(result)

    # 保存到info列表中
    info.append(result)
    # print(info)
    # print(len(info))
    return info



# 对数据保存还不熟悉，用txt保存电影信息
def save_film(info):
    with open('film.txt',"a",encoding="utf-8") as f:
        f.write(info)



def main():
    # 获取每页的html
    for i in range(0,100,10):
        url = "https://maoyan.com/board/4"
        res =req_url(url,headers,i)
        info = parse_res(res)
    # 一个电影一行，保存电影信息
    for i in range(10):
        for j in range(10):
            print(str(i)+str(j))
            for k in range(4):
                save_film(info[i][j][k])
            save_film("\n")
if __name__ == '__main__':
    main()
