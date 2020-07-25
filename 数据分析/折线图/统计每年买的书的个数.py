from matplotlib import pyplot as plt
import matplotlib,random

matplotlib.rc('font',family = 'Microsoft yahei')

y = [random.randint(1,8) for i in range(5,20)]
x = range(5,20)

plt.figure(figsize=(20,8),dpi=80)
plt.plot(x,y)
_x = list(x)
_xlabel = ['{}岁'.format(i) for i in _x]
plt.xticks(_x,_xlabel,rotation=60)

plt.yticks(range(min(y),max(y)+1))

plt.grid()
plt.show()