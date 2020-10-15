let students = ["jaki", "Lucy", "Mery", "July"];

// 进行数组的解构赋值
let [a, b, c, d] = students;
console.log(a + ' ' + b + " " + c + " " + d);

// 提取前三个
let [e, f, g] = students;
console.log(e, f, g);
// 提取第四个
let [, , , h] = students;
console.log(h);
// 提取第一个，并将其他的放入另一个数组
let [i, ...j] = students;
console.log(i, j);
// 溢出的变量被赋值为undefined
let [k, l, m, n, o] = students;
console.log(k, l, m, n, o);

console.log('-------------------');
// 解构赋值的嵌套
let array = [1, 2, [5, 6, 7]]
let [p, q, [r, s, t]] = array;
console.log(''+p + q + r + s + t);