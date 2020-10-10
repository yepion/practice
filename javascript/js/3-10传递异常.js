var InputError = {
    NotnumberError: "must input a Number value",
    FinityError: "must input a Number is Finity",
    DividendError: "dividend must not be 0"
};

function div(a, b) {
    if ((typeof a) != "number" || (typeof b) != "number") {
        throw InputError.NotnumberError;
    }
    if (!isFinite(a) || !isFinite(b)) {
        throw InputError.FinityError;
    }
    if (b === 0) {
        throw InputError.DividendError;
    }

    return a / b
}


// function newDiv(a, b) {
//     try {
//         var res = div(a, b);
//     } catch (e) { 
//         console.log(e);
//     } finally{
//         console.log("异常处理结束")
//     }
//     return res

// }
// var res = newDiv("3", 4);
// console.log(res);
function newDiv(a, b) {
    try {
        var res = div(a, b);
        // 这里被捕获
    } catch (e) {
        if (e === InputError.DividendError) {
            res = NaN
        } else if (e === InputError.FinityError) {
            res = NaN;
        } else {
            throw e;
        }
    } finally {
        console.log("内层异常处理结束")
    }
    return res;

}
try {
    var res = newDiv(Infinity, 1);
} catch (e) {
    // 下级被捕获了，所以这里没有打印
    console.log("输入错误");
} finally {
    console.log('外层处理结束');

}
console.log(res);
// 异常从下往上传递，直到被捕获或者不再有可处理的调用方法

