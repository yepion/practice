import csv

with open('data.csv','w') as csvf:
    writer = csv.writer(csvf,delimiter=' ')
    writer.writerow(['id','name','age'])
    writer.writerow(['1001','zhangsan',20])
    writer.writerow(['1001','zhangsan',20])
    writer.writerow(['1001','zhangsan',20])
