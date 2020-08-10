import pandas as pd
import numpy as np

df1 = pd.DataFrame(np.arange(12).reshape(3,4),columns=list('abcd'))
print(df1)

df2 = pd.DataFrame(np.arange(6).reshape(2,3),columns=list('xyz'))
print(df2)

print(df1.join(df2))
print('\n********************')
print(df2.join(df1))