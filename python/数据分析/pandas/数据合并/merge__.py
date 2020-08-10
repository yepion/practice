import pandas as pd
import numpy as np

df1 = pd.DataFrame(np.ones(12).reshape(3,4),columns=list('abcd'))
print(df1)

df2 = pd.DataFrame(np.zeros(6).reshape(2,3),columns=list('axy'))
print(df2)

print('*****************************')
print(df1.merge(df2,on='a',how='outer')) #inner交集，outer并集，legt左连接，right右连接