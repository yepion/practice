import numpy as np
import pandas as pd

t1 = pd.DataFrame(np.arange(12).reshape(3,4))
print(t1)

t2 = pd.DataFrame(np.arange(12).reshape(3,4),index=list('abc'),columns=list("1234"))
print(t2)

t3 = {'a':['dsfg','adsg'],'ads':['adfasf','awdf']}
t3 = pd.DataFrame(t3)
print(t3)