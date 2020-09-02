import random
with open('ip.txt','r') as f:
    proxies_list =f.read().split('\n')
print(len(proxies_list))