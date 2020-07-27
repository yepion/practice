from matplotlib import pyplot as plt
import matplotlib

matplotlib.rc('font',family= 'Microsoft yahei')

y_1 = [30, 32, 31, 31, 24, 16, 33, 33, 33, 34, 34, 25, 36, 32, 31, 30, 31, 32, 33, 23, 33, 33, 21, 36, 27, 35, 35, 35, 37, 37, 38]
y_2 = [12, 12, 12, 12, 13, 13, 13, 14, 13, 15, 15, 14, 14, 12, 11, 12, 10, 9, 11, 11, 11, 12, 13, 11, 12, 13, 14, 14, 16, 16, 16]

x_1= range(1,32)
x_2 = range(51,82)

plt.figure(figsize=(20,8),dpi=80)

plt.scatter(x_1,y_1,label='3月份')
plt.scatter(x_2,y_2,label = '10月份')

_x = list(x_1)+list(x_2)
_xlabel = ['3月{}日'.format(i) for i in x_1]
_xlabel += ['10月{}日'.format(i-50) for i in x_1]
plt.xticks(_x[::2],_xlabel[::2],rotation=45)

plt.xlabel('时间')
plt.ylabel('温度')
plt.title('温度变化表')
plt.grid(alpha = 0.4,color = 'cyan')
plt.legend()

plt.show()