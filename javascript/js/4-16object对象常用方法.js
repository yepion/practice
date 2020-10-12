var teacher = {
    name: "jaki",
    age: 25
}

// 判断对象是否包含指定的属性，此属性不是原型链上的
console.log(teacher.hasOwnProperty("name"));

var teacher2 = {}
var prototype = {
    subject: "javascript"
}

console.log("---------------------");
// 设置原型
Object.setPrototypeOf(teacher2, prototype)
teacher.name = "jaki"
teacher.age = 25
teacher.teaching = function () {
    console.log("teaching......");
}
console.log(prototype.isPrototypeOf(teacher));