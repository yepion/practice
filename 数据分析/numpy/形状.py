import numpy as np

t1 = np.array([[1,2,3],[4,5,6]])
print(t1)
print(t1.shape)

print('*'*100)

t2 = np.arange(12)
t3 = t2.reshape((3,4))
print(t2)
print(t3)