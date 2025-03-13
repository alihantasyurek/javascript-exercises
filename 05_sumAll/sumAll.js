const sumAll = function(first, sec) {
    if(first < 0 || sec < 0 || !Number.isInteger(first) || !Number.isInteger(sec)){
        return "ERROR"
    }
    let sum = 0;
    const [smaller, larger] = first < sec ? [first, sec] : [sec, first];

    for(let i = smaller; i <= larger; i++){
         sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Number.isInteger()