let set = new Set([1, 2, 2, 5, 5, 6])
// set也是一种数组的去重方式
console.log(set);

set.forEach((e) => { 
    console.log(e);
})