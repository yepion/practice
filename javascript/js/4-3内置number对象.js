var num1 = new Number(5);
console.log(num1);  //[Number: 5]
console.log(typeof num1); //object

// Number函数对象中的常量属性

//两个数值之间的最小间隔
console.log(Number.EPSILON);
//javascript中最大的安全整数
console.log(Number.MAX_SAFE_INTEGER);
//能表示的最大数
console.log(Number.MAX_VALUE);
//能表示最接近0的数
console.log(Number.MIN_VALUE);
//非数字
console.log(Number.NaN);
// 负无穷
console.log(Number.NEGATIVE_INFINITY);
// 正无穷
console.log(Number.POSITIVE_INFINITY);

console.log("----------------------");

// Number常用方法
// 判断传入参数是否为nan
console.log(Number.isNaN(1));
// 判断是否为有限数字
console.log(Number.isFinite(1));
//判断是否为整数，字符串将输出false
console.log(Number.isInteger("1"));
//判断是否为安全的整数
console.log(Number.isSafeInteger(1));
//将字符串转换为浮点数
console.log(Number.parseFloat("1.23"));
//将字符串转换为整数
console.log(Number.parseInt("1.23"));







