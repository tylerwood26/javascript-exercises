const palindromes = function (str) {
    // make lowercase
    let strLower = str.toLowerCase();
    // remove punctuation
    let strNoPunct = strLower.replaceAll(".", "").replaceAll("!", "").replaceAll(",", "").replaceAll(" ", "");
    // flip str
    let flippedStr = strNoPunct.split('').reverse().join('');
    // check if str === flipped str
    if (strNoPunct === flippedStr) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
