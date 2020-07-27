import numpy as np

t1 = np.array(range(1,6))
t2 = np.arange(10)
print(t1)
print(t2)
print(t2.dtype)

print('*'*100)

t3 = np.arange(1,8,dtype=float)
print(t3)
print(t3.dtype)

# 转换
t4 = t3.astype('int8')
print(t4)
print(t4.dtype)


t5 = np.round(t3,2)
print(t5)