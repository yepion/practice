function Teacher(name, age, subject) { 
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teaching = function () { 
        console.log("I'm "+this.name+" may age: "+this.age+" my subject:"+this.subject);
        
    }

}

var Jaki = new Teacher("jaki", 16, "java");
var Lucy = new Teacher("Lucy", 20, "python")

Jaki.teaching()
Lucy.teaching()