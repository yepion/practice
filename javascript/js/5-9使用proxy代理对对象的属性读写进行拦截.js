let teacher = {
    name: "jaki",
    age: 25,
    teaching: function () { 
        console.log("teaching....");
    }
}

let proxy_teacher = new Proxy(teacher, {
    set: (target, key, value, recevier) => { 
        console.log("添加属性：", key);
        target[key] = value;
    },
    get: (target, key, recevier) => { 
        console.log("获取属性：", key);
        return target[key];
    }
})

console.log(proxy_teacher.name);
proxy_teacher.subject = "javascript"
console.log(proxy_teacher.subject);