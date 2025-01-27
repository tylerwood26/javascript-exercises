const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if(num == 0) return 0;
    let arr = [];
    for (let i = 0; i < num; i++) {
        // if array.lenght is less that 2 append a 1
        if (arr.length < 2) {
            arr.push(1);
        } else {
            // add i to last number in array
            arr.push(arr[i-2] + arr[i-1]);
        }
    }
    // return last number in array
    let length = arr.length;
    return arr[length-1];
};

// Do not edit below this line
module.exports = fibonacci;
