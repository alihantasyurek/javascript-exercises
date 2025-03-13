/* My solution 
function filter(currentValue){
    while (this.includes(currentValue)){
        this.splice(this.indexOf(currentValue), 1);
    }

    return this;
}

const removeFromArray = function(arr, ...nums) {
    nums.forEach(filter, arr)
    return arr;
};

*/

/*
const removeFromArray = function(arr, ...nums) {
    const newArr = []
    arr.forEach((item) => {
        if(nums.includes(item)) // if it's not on the nums it's sending add it to the arr
            newArr.push(item);
    })
    return arr;
};

*/

function fn(currVal) {
    const news = [];
    if (!this.includes(currVal)) {
        news.push(currVal);
    }

    return news;
}

const removeFromArray = function(arr, ...nums) {
    return arr.map(fn, nums)
};

console.log(removeFromArray([1, 2, 3, 4, 5], 2))

// Do not edit below this line
module.exports = removeFromArray;
