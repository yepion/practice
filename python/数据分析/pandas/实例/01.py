import pandas as pd
from matplotlib import pyplot as plt

df = pd.read_csv('../素材/day05/code/IMDB-Movie-Data.csv')
# print(df.head())
# print(df.info())

runtime_data = df['Runtime (Minutes)'].values
#不加values为series对象 <class 'pandas.core.series.Series'>
#加values生成数组 <class 'numpy.ndarray'>
# print(runtime_data)
# print(type(runtime_data))

max_runtime = runtime_data.max()
min_runtime = runtime_data.min()
print(max_runtime-min_runtime)
runtime_bin = (max_runtime-min_runtime)//5

plt.figure(figsize=(20,8),dpi=80)
plt.hist(runtime_data,runtime_bin)

plt.xticks(range(min(runtime_data),max(runtime_data),5))
plt.grid(alpha=0.5)
plt.show()