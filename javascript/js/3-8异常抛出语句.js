function div(a, b) { 
    if ((typeof a) != "number" || (typeof b) != "number") { 
        throw "must input a Number value"
    }
    if (!isFinite(a) || !isFinite(b)) { 
        throw "must input a Number is Finity"
    }
    if (b === 0) { 
        throw "dividend must not be 0"
    }

    return a/b
}
var res = div(3, 0)
console.log(res)