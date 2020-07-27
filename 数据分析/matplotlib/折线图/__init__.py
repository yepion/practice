from matplotlib import pyplot as plt

x = range(2,26,2)
y= [15,16,23,24,16,25,12,16,19,18,35,25]

# 图片尺寸和清晰度
fig = plt.figure(figsize=(20,8),dpi=100)

plt.plot(x,y)
# 设置x轴刻度
plt.xticks(x)
# 保存图片
plt.savefig('./a.jpg')
plt.show()