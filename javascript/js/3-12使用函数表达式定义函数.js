var outputAge = function (age) {
    console.log("My age is: " + age);

};
outputAge(25)


console.log("*******************");

//定义一个递归阶梯函数
var mathFunc = function mathF(a) {
    var res = a;
    a--;
    if (a > 0) {
        res *= mathFunc(a);
    }
    return res
};
var mathRes = mathFunc(5);
console.log(mathRes);

console.log("---------------------------------------------------------------");

// 在表达式未执行前变量值是undefined
// 函数表达式定义的函数只是将函数对象赋值给变量，变量可重新赋值。

console.log("-------------------------------------------------------------------");

// //函数表达式
// var outputAge = function (age) {
//     console.log("My age is: " + age);

// };
// // 将output赋值给变量
// var newFunc = outputAge;
// // 重新对output 赋值
// outputAge = "Hello world"

// newFunc(25)
// console.log(outputAge);
