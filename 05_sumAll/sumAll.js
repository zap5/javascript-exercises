const sumAll = function(num1, num2) {
    
    if(!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    
    let smaller = Math.min(num1, num2);
    let larger = Math.max(num1, num2); 
    let result = 0;

    for (let i = smaller; i <= larger; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
