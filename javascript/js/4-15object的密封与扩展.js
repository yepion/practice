// 密封不可添加、修改、删除属性，
// 扩展只对应添加


var seal = {
    name: "jaki"
}
self = Object.seal(seal)
// 密封后对象不能添加新属性
seal.age = 25
console.log(seal.age);

// 判断是否密封
console.log(Object.isSealed(seal));

console.log("--------------------");
// 扩展
var ext = {
    name: "jaki"
}

ext = Object.preventExtensions(ext)
ext.age = 25
console.log(ext.age);//undefined
// 判断是否可以扩展
console.log(Object.isExtensible(ext));
