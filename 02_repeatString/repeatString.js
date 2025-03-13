const repeatString = function(str, times) {
    if(num < 0)
        return "ERROR";
    let joinedStr = "";
    for(let i = 0; i < times; i++)
        joinedStr += str;
    return joinedStr;
};

// Do not edit below this line
module.exports = repeatString;
