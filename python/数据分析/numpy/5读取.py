import numpy as np


f1 = np.loadtxt('numbers.csv',delimiter=',',dtype='int')
f2 = np.loadtxt('numbers.csv',delimiter=',',dtype='int',unpack=True)#转置

print(f1)
# print('*'*100)
print(f2)


# 取一行
print(f1[0])
# 取一列
print(f1[:,0])

# 取不连续多行
print(f1[[1,2,3]])
#取不连续多列
print(f1[:,[2,3]])

# 取连续多行
print(f1[1:])