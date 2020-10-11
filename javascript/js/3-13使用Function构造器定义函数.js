var output = new Function("name", "console.log(name);");//所有参数类型都为字符串类型

output("jaki")

console.log("--------------------");

function myFunc() {
    //arguments属性将返回一个数组结构数据，数组是传入的实参
    for (var i = arguments.length - 1; i >= 0; i--) {
        console.log(arguments[i]);

    }
}
myFunc(1, 2, 3, 4)