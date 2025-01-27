const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => {
    return total * currentValue;
  });
};

const power = function(num1, num2) {
  let sum = num1;
  for (let i = 1; i < num2; i++) {
    sum *= num1;
  }
  return sum;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let numArr = [];
  for (let i = num; i > 0; i--) {
    numArr.push(i);
  };
  return numArr.reduce((total, currentValue) => {
    return total * currentValue;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
