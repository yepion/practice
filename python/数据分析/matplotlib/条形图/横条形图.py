#coding:utf-8

from matplotlib import pyplot as plt
import matplotlib

matplotlib.rc('font',family= 'Microsoft yahei')

name =['活着', '钢琴家', '勇敢的心', '阿飞正传', '射雕英雄传之东成西就', '爱·回家', '初恋这件小事', '泰坦尼克号', '迁徙的鸟', '蝙蝠侠：黑暗骑士', '恐怖直播', '我爱你', '大闹天宫', '剪刀手爱德华', '甜蜜蜜', '闻香识女人', '英雄本色', '三傻大闹宝莱坞', '黑客帝国3：矩阵革命', '触不可及', '忠犬八公物语', '辩护人', '喜剧之王', '黄金三镖客', '这个杀手不太冷', '借东西的小人阿莉埃蒂', '大话西游之月光宝盒', '一一', '窃听风暴', '楚门的世界', '飞屋环游记', '哈尔的移动城堡', '上帝之城', '美丽心灵', '肖申克的救赎', '美丽人生', '倩女幽魂', '搏击俱乐部', '春光乍泄', '海上钢琴师', '驯龙高手', '教父2', '美国往事', '魂断蓝桥', '狮子王', '疯狂原始人', '唐伯虎点秋香', '速度与激情5', 'V字仇杀队', '龙猫', '本杰明·巴顿奇事', '指环王2：双塔奇兵', '指环王1：护戒使者', '时空恋旅人', '末代皇帝', '天空之城', '风之谷', '幽灵公主', '蝙蝠侠：黑暗骑士崛起', '十二怒汉', '素媛', '大话西游之大圣娶亲', '教父', '海洋', '黑客帝国', '鬼子来了', '哈利·波特与死亡圣器（下）', '辛德勒的名单', '指环王3：王者无敌', '7号房的礼物', '盗梦空间', '加勒比海盗', '当幸福来敲门', '穿条纹睡衣的男孩', '音乐之声', '无间道', '致命魔术', '小鞋子', '萤火之森', '少年派的奇幻漂流', '断背山', '罗马假日', '夜访吸血鬼', '天堂电影院', '怦然心动', '乱世佳人', '完美的世界', '霸王别姬', '魔女宅急便', '七武士', '忠犬八公的故事', '海豚湾', '拯救大兵瑞恩', '机器人总动员', '神偷奶爸', '放牛班的春天', '熔炉', '阿凡达', '千与千寻', '无敌破坏王']
score = [9.0, 8.8, 8.8, 8.8, 8.8, 9.0, 8.8, 9.4, 9.2, 9.3, 8.8, 9.0, 9.0, 8.8, 9.2, 8.8, 9.2, 9.1, 8.8, 9.1, 9.0, 8.8, 9.1, 8.9, 9.4, 8.8, 9.6, 8.9, 9.0, 8.9, 8.9, 8.9, 8.9, 8.8, 9.5, 9.3, 9.1, 8.8, 9.2, 9.3, 9.0, 9.0, 9.1, 9.2, 8.8, 9.5, 9.1, 9.1, 8.8, 9.2, 8.8, 9.1, 9.0, 8.8, 8.8, 9.0, 8.8, 8.9, 8.9, 9.1, 9.1, 8.8, 9.3, 8.9, 9.0, 8.9, 9.0, 9.2, 9.2, 8.9, 9.2, 8.9, 9.4, 9.0, 9.0, 9.1, 8.8, 9.0, 9.0, 8.9, 9.0, 8.8, 9.2, 8.9, 9.1, 8.9, 9.5, 9.2, 9.1, 9.2, 8.9, 8.9, 9.3, 8.9, 8.8, 8.8, 9.0, 9.3, 9.0, 9.1]
print(len(name))
# with open('film.txt','r',encoding='utf-8') as f:
#     # txt = f.readline()
#     # print(txt.split(' '))
#     for i in f.readlines():
#         list_ = i.split()
#         name.append(list_[0].strip('"'))
#         score.append(list_[3])
# print(name)
# print(len(name))
# print(score)
# print(len(score))
plt.figure(figsize=(12,20),dpi=80)
plt.barh(range(len(name)),score,height=0.3,color='cyan')

plt.yticks(range(len(name)),name)
plt.grid(alpha=0.3)
plt.savefig('./b.png')


plt.show()