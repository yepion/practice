import numpy as np

t1 = np.arange(1,13).reshape(3,4)
t1[t1<5]=3
print(t1)
print('*'*100)

t1 = np.arange(1,13).reshape(3,4)
a = np.where(t1<3,3,10)#numpy的三元运算
print(a)
print('*'*100)


t1 = np.arange(1,13).reshape(3,4)
# a = np.clip(t1,3,5)#小于3替换为3，大于5替换为5
a = t1.clip(3,5)
print(a)
print('*'*100)
