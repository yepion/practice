import pandas as pd
import numpy as np
from matplotlib import pyplot as plt

df = pd.read_csv('../素材/day05/code/IMDB-Movie-Data.csv')

# print(df['Genre'])
temp_list = df['Genre'].str.split(',').tolist() #[ [],[],[] ]
tag_list = list(set([i for j in temp_list for i in j])) #对标签去重，并将标签转为列表
# print(temp_list)
# print(tag_list)
# print(type(tag_list))
zero_df = pd.DataFrame(np.zeros((df.shape[0],len(tag_list))),columns=tag_list)#生成df值为0的dataFrame
# print(zero_df)

for i in range(zero_df.shape[0]):
    zero_df.loc[i,temp_list[i]] = 1
    # print(temp_list[i])
print(zero_df)

# 统计每列的总数
count_Genre = zero_df.sum(axis=0) #axis=0对每一列求和，axis=1对每一行求和,默认对列求和
# print(count_Genre)

# 排序
count_Genre = count_Genre.sort_values()
print(count_Genre)
# 生成图像
_x = list(count_Genre.index)
_y = count_Genre.values
# print(_x)
# print(type(_x))
# print(_y)
# print(type(_y))

plt.figure(figsize=(20,8),dpi=80)

plt.bar(_x,_y,color='orange')

# 添加数值
for a,b in zip(_x,_y):
    plt.text(a,b,b,ha='center',va='bottom',fontsize=11)
plt.show()

