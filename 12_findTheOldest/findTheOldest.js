const findTheOldest = function(arr) {
    let currentYear = 2025;
    // calculate age and add it to object
    let newArr = arr.map((currentValue) => {
        if (currentValue.yearOfDeath === undefined) {
            currentValue.yearOfDeath = currentYear;
        }
        currentValue.age = currentValue.yearOfDeath - currentValue.yearOfBirth;
        return currentValue;
    })
    // loop through and find largest age
    let age = 0;
    let oldest = {}  
    for (let i = 0; i < newArr.length-1; i++) {
        if (newArr[i]['age']> age) {
            age = newArr[i]['age'];
            oldest = newArr[i];
        }
    }
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
