import xlutils,xlrd,xlwt

# course1 = ['形式与政策1','机械制图','大学体育','人工智能概论','大学英语1','大学计算机','高等数学','大学化学','大学生心理健康教育','线性代数','大学英语2','机械制图2','思想道德修养与法律基础','形式与政策2','思想道德修养与法律基础实践教学','高等数学2','大学物理学3','大学物理实验1','大学体育2','程序设计及实践']
# course2 = []
# a = 3
# for i in course1:
#     i = i+"-"+str(a)
#     a+=2
#     course2.append(i)
# print(course2)

# course = ['形式与政策1--4', '机械制图-6', '大学体育-8', '人工智能概论-10', '大学英语1-12', '大学计算机-14', '高等数学-16', '大学化学-18', '大学生心理健康教育-20', '线性代数-22', '大学英语2-24', '机械制图2-26', '思想道德修养与法律基础-28', '形式与政策2-30', '思想道德修养与法律基础实践教学-32', '高等数学2-34', '大学物理学3-36', '大学物理实验1-38', '大学体育2-40', '程序设计及实践-42']
#
# def panduan(txt):
#     course = ['形式与政策1--4', '机械制图-6', '大学体育-8', '人工智能概论-10', '大学英语1-12', '大学计算机-14', '高等数学-16', '大学化学-18',
#               '大学生心理健康教育-20', '线性代数-22', '大学英语2-24', '机械制图2-26', '思想道德修养与法律基础-28', '形式与政策2-30', '思想道德修养与法律基础实践教学-32',
#               '高等数学2-34', '大学物理学3-36', '大学物理实验1-38', '大学体育2-40', '程序设计及实践-42']
#
#     for cou in course:
#         if txt in cou:
#             num = str(cou.split('-')[1])
#             print(num)

# import xlrd
# from xlutils.copy import copy
# def write(i,num,data,name):
#     # 打开 excel 文件
#     readbook = xlrd.open_workbook(name)
#
#     # 复制一份
#     wb = copy(readbook)
#
#     # 选取第一个表单
#     sh1 = wb.get_sheet(0)
#
#     # 在第四行新增写入数据
#     sh1.write(i,num,data)
#     # 保存
#     wb.save('*********.xls')



course = []
wb = xlrd.open_workbook("119090102班成绩计算过程.xls")

sh2 = wb.sheet_by_index(1)

for i in range(1, sh2.nrows):
    rows = sh2.row_values(i)
    # print(rows[2])
    course.append(rows[2])
print(set(course))