var teacher = {
    name: 'jaki',
    age: 25,
    teaching: function () {
        console.log("teacher");
    }
}

var json = JSON.stringify(teacher, function (key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value
}, "...")

console.log(json);

// var obj = JSON.parse(json)
