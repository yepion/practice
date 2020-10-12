var teacher = {
    name: "jaki",
    age: "25",
    tostring: function (owner) {
        console.log(owner + "、name: " + this.name + "、age: " + this.age);
    }
}
teacher.tostring("teacher")

var student = {
    name: "lucy",
    age: 23
}
teacher.tostring.apply(student, ["student"])
// apply()第一个参数设置调用方法的上下文，即函数中this的指向。第二个参数为一个数组，将作为实参传入
// 与apply类似的还有call

// bind（）
var studentToString = teacher.tostring.bind(student, "Student");
studentToString();

