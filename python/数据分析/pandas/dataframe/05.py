import pandas as pd
import numpy as np
# 数据缺失处理
df = pd.DataFrame(np.arange(12).reshape(3,4))
df.iloc[(1,2)] = np.nan
print(df)

# 判断是否为nan
print(df.isnull()) #是nan
print(pd.notnull(df)) #不是nan为true

# 处理
# 1.
print(df.dropna(axis=0,how='any'))#删除有nan的行
# 2.
print('\n填充数据')
print(df.fillna(0))#填充nan
print(df.fillna(df.mean()))

#处理为0的数据
df[df==0]=np.nan
print(df)