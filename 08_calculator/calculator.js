const add = function(x, y) {
  	return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(x) {
    let len = x.length;
    let sum = 0;

    for (let i = 0; i < len; i++)
    {
        sum += x[i];
    }

    return sum;
};

const multiply = function(x) {
  let len = x.length;
  let prod = 1;

  for (let i = 0; i < len; i++)
  {
      prod = prod * x[i];
  }

  return prod;
};

const power = function(x, y) {
	  return x ** y
};

const factorial = function(x) {
	  if (x == 0) {
      return 1;
    }
    else {
      return x * factorial(x - 1);
    }
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
