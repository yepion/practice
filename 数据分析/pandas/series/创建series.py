import pandas as pd

t1 = pd.Series([1,2,3,4,5,6,6])
print(t1)

t2 = pd.Series([1,5,78,9,5],index=list('abdef'))
print(t2)

#字典转换为series类型
temp_dect = {"zhangsna":"14","lishi":"45"}
t3 = pd.Series(temp_dect)
print(t3)

print('$'*100)
# 转换数据类型
print(t2.dtype)
t2 = t2.astype(float) #返回新的数组，而不是修改数组
print(t2)
print(t2.dtype)

print('*'*100)
# 通过索引取值
print(t3[1])
print(t3['lishi'])
print(t3[:])

# 取index，和values
print(t3.index)
print(t3.values)
