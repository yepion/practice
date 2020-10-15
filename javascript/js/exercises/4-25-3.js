// 判断是否存在连续相同字母
function containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str);
}


console.log(containsRepeatingLetter("cc"));