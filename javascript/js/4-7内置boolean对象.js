var bool = new Boolean(true)
console.log(bool);

console.log("-------------------------false----------------");
console.log(new Boolean(0));
console.log(new Boolean(-0));
console.log(new Boolean(NaN));
console.log(new Boolean(undefined));
console.log(new Boolean(""));
console.log(new Boolean(false));
console.log(new Boolean(null));

// 原始值为true的boolean对象
console.log("--------------true---------------");
console.log(new Boolean("false"));
console.log(new Boolean({}));
console.log(new Boolean(Infinity));
console.log(new Boolean(new Boolean(false)));


// if判断
// 判断中有boolean对象需要去原始值进行条件判断
var bf = new Boolean(false);
if (bf) {                       //会执行
    console.log("执行了");
}
if (bf.valueOf()) {             //不执行
    console.log("执行了");
}