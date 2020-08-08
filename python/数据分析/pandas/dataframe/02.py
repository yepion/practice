import pandas as pd
import numpy as np

f1 = pd.read_csv('./dogNames2.csv')
# print(f1.head())
# print(f1.info())

# 排序
t1 = f1.sort_values(by='Count_AnimalName',ascending=False)
# print(t1[:5])
print(t1.head(5))