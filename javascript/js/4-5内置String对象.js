var str1 = String("Hello world")
console.log(typeof str1);
console.log(str1);
console.log(str1.length);

// 返回特定位置的字符，下标从0开始
console.log(str1.charAt(0));
// 返回特定位置字符编码
console.log(str1.charCodeAt(0));
// 拼接字符串并返回
console.log(str1.concat("!"));
// 从前往后，如果没找到返回-1
console.log(str1.indexOf("l"));
// 从后往前
console.log(str1.lastIndexOf('l'));
// 进行字符串比较，源字符串大于参数字符串返回大于0的数，相等返回0
console.log(str1.localeCompare("Aello world"));
// 用正则表达式进行匹配
console.log(str1.match(/He/));
// 替换
console.log(str1.replace(/He/, "Ai"));
// 用正则表达式查找某个子字符串的位置
console.log(str1.search(/He/));
// 截取范围内的字符串
console.log(str1.slice(0, 3));
// 分割字符串，返回一个数组，第一个参数为分割的字符，第二个参数为返回的最多子串的个数
console.log(str1.split("l", 10));
// 截取，第一个截取开始的位置，第二个截取的长度
console.log(str1.substr(0, 2));
// 截取下标间的子串
console.log(str1.substring(1, 2));
// 转换为小写
console.log(str1.toLocaleLowerCase());
console.log(str1.toLowerCase());
// 转换为大写
console.log(str1.toLocaleUpperCase());
console.log(str1.toUpperCase());
// 去掉空格
console.log(str1.trim());
console.log(str1.trimLeft());
console.log(str1.trimRight());
// 获取字符串对象的原始值
console.log(str1.valueOf());
