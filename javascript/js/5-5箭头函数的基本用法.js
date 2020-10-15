let f = (a) => {
    return a * a
}

let res = f(5)
console.log(res);

// 简化
g = a => a * a 
let res2 = g(6)
console.log(res2);

// 注意: 
// 返回是一个对象时，需要将对象包括在小括号内，这是因为大括号会被解释为代码块
let func = () => ({name:"jaki"})
console.log(func());

// 函数参数的结构赋值
let func2 = ({ name, age }) => console.log(name, age);
func2({ name: "jaki", age: 25 });

// 箭头函数的this指向是全局