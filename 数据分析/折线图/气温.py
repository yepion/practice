from matplotlib import pyplot as plt
import random
import matplotlib
matplotlib.rc('font',family='Microsoft yahei')

# from matplotlib import font_manager
#
# my_font = font_manager.FontProperties(fname='C:\Windows\Fonts\simsun.ttc')

y = [random.randint(20,35) for i in range(120)]
# x1 = ['10:{}'.format(i) for i in range(1,61)]
# x2 = ['11:{}'.format(i) for i in range(1,61)]

# x= x1+x2
# print(x)
x = [i for i in range(0,120)]
# print(x)
plt.plot(x,y)

_x = list(x)
_x_label = ['10点{}分'.format(i) for i in range(60)]
_x_label += ['11点{}分'.format(i) for i in range(60)]
plt.xticks(_x[::10],_x_label[::10],rotation=30)
plt.show()