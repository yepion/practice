// 去重
var a = [1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 8, 7, 9,,2,20, 45, 90,]

function deReapeat(arr) {
    let newArr = [];
    arr.map(function (item) {
        if (newArr.indexOf(item) === -1) {
            console.log(newArr.indexOf(item));
            console.log(item);
            newArr.push(item)
        }
    })
    return newArr
}

console.log(deReapeat(a));