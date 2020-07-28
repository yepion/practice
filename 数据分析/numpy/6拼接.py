import numpy as np

t1 = np.arange(12).reshape(2,6)
t2 = np.arange(13,25).reshape(2,6)


# 水平拼接
t3 = np.hstack((t1,t2))
print(t3)

# 竖直
t4 = np.vstack((t1,t2))
print(t4)