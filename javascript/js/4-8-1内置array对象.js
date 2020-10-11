var stus = ["tom", "jaki", "lucy", "ami"];
console.log(typeof stus);

var array = new Array("tom", "jaki", "lucy", "ami")
console.log(typeof array);
// 以上两种创建数组对象本质一样

//判断是否为数组
console.log(Array.isArray(array));
//数组长度
console.log(array.length);


console.log("-----------------");
//修改原数组
var a = [1, 2, 3, 4, 5];
//删除最后一个元素
a.pop()
console.log(a);
//末尾添加元素
a.push(9, 10)
console.log(a);
//倒置数组
a.reverse()
console.log(a);
//删除第一个元素
a.shift()
console.log(a);

console.log("+++++++++++++++++++++++++");
// 不修改元素组

//最加元素
console.log(a.concat(6, 8, 9));
//将所有元素传入的参数进行分割拼接
console.log(a.join("."));
//截取
console.log(a.slice(0,3));
//拼接字符串
console.log(a.toString());
//查找元素
console.log(a.indexOf(1));

