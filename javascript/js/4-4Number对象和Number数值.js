var num3 = 100;
console.log(typeof num3);
var str = num3.toString();
console.log(typeof str);
console.log(typeof num3);
//result
// number
// string
// number

//调用tostring方法时，ecmascript将其当作对象处理，实际上只是创建了一个中间对象，
// 并没有真正将原始数据转换为number实例对象

//new关键字构造对象执行了三个操作
// 1.创建一个空对象
// 2.构造函数
// 3.将函数中的this与新建的对象进行绑定

// 不使用new创建number，直接用number通常完成数值类型的转换
console.log("\nnum4:将字符4转换为number类型");
var num4 = Number("4")
console.log(typeof num4);
console.log(num4);