// 创建对象的第一种方法
var teacher = {
    name: "jaki",
    age: "25",
    tostring: function () {
        console.log("name: " + this.name + "、age: " + this.age);
    }
}

// 创建对象的第二种方法

var student = new Object();
student.name = "Lucy";
student.age = 20;
student.learning = function () { 
    console.log("learning......");
}

// 对象属性配置
Object.defineProperty(student, "name", {
    configurable: true,//属性是否可配置
    enumerable: true,//属性是否可枚举
    writable: true,//是否可被赋值运算符修改
    value: "luna"
});
console.log(student.name);

// 配置多个
Object.defineProperties(student, {
    "name": {
        value: "yepion",
        writable:false
    },
    "age": {
        value: 25,
        writable:false
    }
})
student.name = "hei" //writable为false，所以不可修改
console.log(student.name,student.age);