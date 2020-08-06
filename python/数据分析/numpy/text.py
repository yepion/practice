import numpy as np

t1 = np.arange(12).reshape((3,4)).astype('float')
print(t1)
t1[1,2:] = np.nan
print(t1)

for i in range(t1.shape[1]):
    t1_col = t1[:,i]
    nan_num = np.count_nonzero(t1_col!=t1_col)
    if nan_num!=0:
        t1_not_nan_col = t1_col[t1_col==t1_col]

        t1_col[np.isnan(t1_col)] = t1_not_nan_col.mean()