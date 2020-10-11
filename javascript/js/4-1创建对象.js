// var teacher = {};
// console.log(typeof teacher); //打印object

teacher = {
    name: "lucy",
    age: 20,
    subject: "javascript",
    teaching: function () {
        console.log("开始教学");

    },
    relaxing: function () {
        console.log("开始讲故事");

    }
};
console.log(teacher.name);
console.log(teacher.age);
teacher.teaching();
teacher.relaxing();


