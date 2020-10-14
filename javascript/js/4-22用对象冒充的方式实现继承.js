function People(name, age) {
    this.name = name;
    this.age = age;

}

function Teacher(name, age, subject) {
    // 这一步作用是转换this的指向
    this.init = People;
    this.init(name, age);
    delete this.init;
    // 添加教师特有属性
    this.subject = subject;
    this.teaching = function () {
        console.log("教师" + this.name + "正在教授" + this.subject);
    }

}

var jaki = new Teacher("jaki", 25, "python")
jaki.teaching()

console.log("-----------------");

// 多继承
function Work(time) {
    this.time = time;
}

function Teacher2(name, age, subject) {
    People.call(this, name, age);
    Work.call(this, 8);//this的指向更改，后面传入的参数
    // console.log(this);
    this.subject = subject;
    this.teaching = function () {
        console.log("教师" + this.name + "正在教授" + this.subject + "课程" + "工作时间" + this.time);
    }
}

var lucy = new Teacher2("Lucy", 20, "python")
lucy.teaching()