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
// catch捕获异常
try {
    var res = div("3", 4)
} catch (e) {
    console.log(e)
} finally {
    console.log("异常处理结束")
}