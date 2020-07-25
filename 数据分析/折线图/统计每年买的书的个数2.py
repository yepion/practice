from matplotlib import pyplot as plt
import matplotlib,random

matplotlib.rc('font',family = 'Microsoft yahei')

y1 = [random.randint(1,8) for i in range(5,20)]
y2 = [random.randint(1,8) for j in range(5,20)]
x = range(5,20)

plt.figure(figsize=(20,8),dpi=80)
plt.plot(x,y1,label='我',color='cyan')
plt.plot(x,y2,label='好朋友',color = 'orange')
_x = list(x)
_xlabel = ['{}岁'.format(i) for i in _x]
plt.xticks(_x,_xlabel,rotation=60)

# plt.yticks(range(min(y),max(y)+1))
# 添加图列
plt.legend()
# 网格
plt.grid(alpha=0.4)
plt.show()