// 封装
// 将复杂的过程封闭在内部
// 对外界只提供入口和出口

var Teacher = {
    init: function (name, age, subject) {
        var teacher = {};
        teacher.name = name;
        teacher.age = age;
        teacher.subject = subject;
        teacher.teaching = function () {
            console.log("name:" + this.name + " age: " + this.age);
        }
        return teacher;
    }
};

var jaki = Teacher.init("jaki", 25, "java")
jaki.teaching()
