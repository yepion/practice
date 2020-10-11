var stus = ["tom", "jaki", "Ami", "lucy"];
//遍历数组stus
stus.forEach(function (element, index, array) {
    console.log(element, index, array);
}, stus)//指定this为stus

console.log("----------------------------------------------");
var notHaveAmi = stus.every(function (element, index, array) {
    console.log(this);
    console.log(element, index, array);
    if (element == "Ami") {
        return false;
    } else {
        return true;
    }
}, stus)
console.log(notHaveAmi);
//every 返回false停止遍历


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
var HaveAmi = stus.some(function (element, index, array) {
    console.log(this);
    console.log(element, index, array);
    if (element == "Ami") {
        return true; //注意这里与every不同
    } else {
        return false;
    }
}, stus)
console.log(HaveAmi);
// some 全为false才返回false

console.log("*********************************************");
newArray = stus.map(function (element, index, array) {
    return element + "!"
}, stus);
console.log(newArray)
//map

console.log("//////////////////////////////////////////");
res = stus.reduce(function (acc, element, index) { //（上次执行累加回调的初始值，当前遍历的元素，下标值）
    return acc + " " + element
}, "hello")
console.log(res);
//reduce