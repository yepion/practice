// 继承
var base = {
    subject: "JavaScript"
}

var teacher1 = Object.create(base, {
    "name": {
        value: "jaki",
        enumerable: true
    },
    "age": {
        value: 25,
        enumerable: true
    }
});
console.log(teacher1);
console.log(teacher1.subject);

console.log("----------------------");
// 冻结
var fre = {
    name: "jaki"
};
fre = Object.freeze(fre);
fre.name = "lucy";
console.log(fre);//冻结后对象不能修改。

// 获取对象的配置信息
console.log("配置信息：");
console.log(Object.getOwnPropertyDescriptor(fre,"name"));
// 获取对象的所有属性
console.log("属性：");
console.log(Object.getOwnPropertyNames(teacher1));
// 获取某个对象的原始对象
console.log("原始对象");
console.log(Object.getPrototypeOf(teacher1));