let promise = new Promise(function (resolve, reject) { 
    setTimeout(() => { 
        console.log("任务已完成");
        resolve("Success")
    },3000)
})



promise.then((success) => { 
    console.log(success);
    console.log("hello ");
}, (error) => { 
        console.log(error);
})

console.log("go");