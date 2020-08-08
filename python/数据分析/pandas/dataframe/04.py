import pandas as pd
import numpy as np


# 布尔索引
df = pd.read_csv('./dogNames2.csv')
# print(type(df))
print(df[df['Count_AnimalName']>50])


