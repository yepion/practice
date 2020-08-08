import pandas as pd
import numpy as np

df = pd.DataFrame(np.arange(12).reshape(3,4),index=list('abc'),columns=list('wxyz'))
print(df)

# loc标签
# iloc位置

print(df.loc['a','z'])
# 取多行和多列
print(df.loc[['a','b'],['w']])

print('*'*100)

print(df.iloc[1,:])