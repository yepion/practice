// create()以某个对象为原型创建对象

var teacher = {
    name: "jaki",
    age: 20,
    teaching: function() { 
        console.log("I'm"+this.name+" my age:"+this.age);
    }
}

var jaki = Object.create(teacher)
jaki.teaching()