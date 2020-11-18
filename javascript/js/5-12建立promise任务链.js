let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("任务已完成");
        resolve("success")
    }, 3000)
})

promise.then((success) => {
    console.log(success);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("任务2已完成");
            resolve("success2")
        }, 2000);
    })
}, (error) => {
    console.log(error);

}).then(success => {
    console.log(success);
})

console.log("go");