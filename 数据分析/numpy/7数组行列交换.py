import numpy as np

t1 = np.arange(12).reshape(2,6)
t2 = np.arange(13,25).reshape(2,6)

print(t1)
# 行交换
t1[[0,1],:] = t1[[1,0],:]
print(t1)

# 列交换
t1[:,[0,1]] = t1[:,[1,0]]
print(t1)







