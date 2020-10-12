//匹配模式
// g 全局匹配
// i 忽略大小写
// m 多行匹配模式
var reg = /hello/ig
var res = "Hello world hello".match(reg)
console.log(res);

// 使用regexp构造函数创建正则表达式
var reg2 = new RegExp("hello", "ig");
console.log("Hello world hello".match(reg2));

// 获取正则表达式的匹配模式
console.log(reg.global);
console.log(reg.ignoreCase);
console.log(reg.multiline);

console.log("------------------------------");
//对目标字符串进行正则匹配
console.log(reg.exec("hello"));
// 检测目标字符串是否可以通过正则验证，即匹配到结果
console.log(reg.test("hello"));

