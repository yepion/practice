from matplotlib import pyplot as plt
import matplotlib
matplotlib.rc('font',family ='Microsoft yahei')

a = ['猩球崛起3：终极之战','蜘蛛侠：英雄归来','战狼2','敦克尔号']
b_16 = [15746,312,4497,319]
b_15 = [12357,156,2045,168]
b_14 = [2358,399,2358,362]

x_width = 0.225
x_14 = list(range(len(a)))
x_15 = [i+x_width for i in x_14]
x_16 = [i+x_width for i in x_15]

plt.figure(figsize=(20,8),dpi=80)

plt.bar(x_14,b_14,width=x_width,label='7月14日')
plt.bar(x_15,b_15,width=x_width,label='7月15日')
plt.bar(x_16,b_16,width=x_width,label='7月16日')

plt.xticks(x_15,a)
plt.legend()
plt.savefig('./c.png')
plt.show()