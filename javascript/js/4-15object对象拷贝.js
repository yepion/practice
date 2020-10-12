// 深浅拷贝

var obj1 = {
    a: {
        name:"jaki"
    },
    b: 20
}

var obj2 = {}

Object.assign(obj2, obj1)//将obj2拷贝到obj1
obj1.a.name = "Lucy"
obj1.b = 25
// b没有修改，因为b是原始值类型，a是引用类型
console.log(obj2);