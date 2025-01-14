const reverseString = function(string) {
    let stringToArray = string.split("");
    let reverseArray = stringToArray.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
