import xlrd,xlwt
from xlutils.copy import copy


# 写入新表数据
def write_xls(i, num, data, name):
    # 打开 excel 文件
    readbook = xlrd.open_workbook(name)

    # 复制一份
    wb = copy(readbook)

    # 选取第一个表单
    sh1 = wb.get_sheet(0)

    # 在第四行新增写入数据
    sh1.write(i, num, data)
    # 保存
    wb.save(name)


# 读取原表数据
def read():
    wb = xlrd.open_workbook("119090102班成绩计算过程.xls")

    # print( "sheet 数量:", wb.nsheets)

    #获取sheet2
    sh2 = wb.sheet_by_index(1)
    # print( u"sheet %s 共 %d 行 %d 列" % (sh2.name, sh2.nrows, sh2.ncols))

    # rows = sh2.row_values(0) # 获取第一行内容
    # rows1 = sh2.row_values(1) # 获取第一行内容
    # # cols = sh2.col_values(1) # 获取第二列内容

    # 打印获取的行列值
    # print( "第一行的值为:", rows)
    # print( "第二行的值为:", rows1)

    for i in range(1,sh2.nrows):
        rows = sh2.row_values(i)
        #['11909010208', '段', '形势与政策1', 0.25, '', '', '', '', 84.0, '', 84.0, '', '', '', 3.4, '通识教育必修', '', 0.0, '(2019-2020-1)-T050009-20140071-2', '2019-2020', 1.0, '材料科学与工程学院', '材料成型及控制工程', '119090102', '', '']
        yield rows

def main():
    name = "副本119099907班成绩计算过程.xls"
    wb = xlrd.open_workbook(name)
    sh = wb.sheet_by_index(0)
    for i in range(1, sh.nrows):
        rows = sh.row_values(i)#应该写入的每一行
        # print(str(rows[1])[:-2])-
        for j in read():#j读取的一行数据
            print(j)
            if(j[0]==str(rows[1])[:-2]):
                if(j[2]=='形势与政策1') :write_xls(i,3,j[10],name)
                elif (j[2]=='机械制图（1）'):write_xls(i,5,j[10],name)
                elif (j[2]=='大学体育[1]'):write_xls(i,7,j[10],name)
                elif (j[2]=='人工智能概论'):write_xls(i,9,j[10],name)
                elif (j[2]== '大学英语1'):write_xls(i,11,j[10],name)
                elif (j[2]=='大学计算机[理工类]'):write_xls(i,13,j[10],name)
                elif (j[2]=='高等数学【(1)材料化工、理】'):write_xls(i,15,j[10],name)
                elif (j[2]=='大学化学'):write_xls(i,17,j[10],name)
                elif (j[2]=='大学生心理健康教育'):write_xls(i,19,j[10],name)
                elif (j[2]=='线性代数[理工]'):write_xls(i,21,j[10],name)
                elif (j[2]=='大学英语2'):write_xls(i,23,j[10],name)
                elif (j[2]=='机械制图（2）'):write_xls(i,25,j[10],name)
                elif (j[2]=='思想道德修养与法律基础'):write_xls(i,27,j[10],name)
                elif (j[2]=='形势与政策2'):write_xls(i,29,j[10],name)
                elif (j[2]=='思想道德修养与法律基础实践教学'):write_xls(i,31,j[10],name)
                elif (j[2]=='高等数学【(2)材料化工】'):write_xls(i,33,j[10],name)
                elif (j[2]=='大学物理学III（1）'):write_xls(i,35,j[10],name)
                elif (j[2]=='大学物理实验I (1)'):write_xls(i,37,j[10],name)
                elif ('大学体育【' in j[2]):write_xls(i,39,j[10],name)
                elif (j[2]=='程序设计及实践[C语言版]'):write_xls(i,41,j[10],name)



main()