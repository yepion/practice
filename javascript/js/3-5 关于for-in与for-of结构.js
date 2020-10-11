var teacher = {
    name: "lucy",
    age: 20,
    subject : "javascript"
}

// for- in:答应对象的值
for (let key in teacher) { 
    console.log(key);
    
}

console.log("---------------------------");


var array = ["lucy", "jaki", "mery", "jie"]
for (let value of array) { 
    console.log(value);
    
}

console.log("--------------");

for (let value of "hello world") { 
    console.log(value);
    
}