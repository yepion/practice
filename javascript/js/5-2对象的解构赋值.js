let teacher = {
    name: "jaki",
    age: 25,
    teaching: function () {
        console.log("teaching...");
    }
}
let { name, age, teaching } = teacher;
console.log(name + "" + age);
teaching()
// 结构对象的默认结构
// let { name:name,age:age} = teacher
// 但是当解构赋值的变量名与对象属性名相同，可以省略映射结构。同理数组也是对象
let { 0: x, 1: y } = [1, 2]
console.log(x,y);