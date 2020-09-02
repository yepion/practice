import requests
s = requests.Session()
data = {
'rylxdm': '1',
'yhbh': '11909010231',
'yhmm': '263637',
}
# sb = 'dtk=%7B%22_danxuanti%22%3A%5B%7B%22key%22%3A70%2C%22value%22%3A%22145%22%7D%2C%7B%22key%22%3A71%2C%22value%22%3A%22150%22%7D%2C%7B%22key%22%3A72%2C%22value%22%3A%22154%22%7D%2C%7B%22key%22%3A73%2C%22value%22%3A%22159%22%7D%2C%7B%22key%22%3A74%2C%22value%22%3A%22161%22%7D%2C%7B%22key%22%3A75%2C%22value%22%3A%22164%22%7D%2C%7B%22key%22%3A76%2C%22value%22%3A%22166%22%7D%5D%2C%22_duoxuanti%22%3A%5B%5D%2C%22_tiankongti%22%3A%5B%5D%2C%22_diliweizhiti%22%3A%5B%5D%2C%22_shijianti%22%3A%5B%5D%2C%22_xingzhengquhuati%22%3A%5B%5D%7D; mrrw_version=1004'


baseurl = 'https://qd-yqcj.cqut.edu.cn/sso/login'
url = "https://qd-yqcj.cqut.edu.cn/home/mrrw?yqrwdm=-1"
def main():
    try:
        s.post(url=baseurl,data=data)

        res = s.get(url=url)
        # e = etree.HTML(res.content.decode('utf-8'))
        # print(e.xpath('../div[1]/label/text()'))
        # print(e.status_code())
    except requests.RequestException as e:
        print('签到失败：{}'.format(e))

    if (res.status_code==200):
        print('签到成功')

main()