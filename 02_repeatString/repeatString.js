const repeatString = function(string, num) {
    newString = "";
    
    if (num === 0) {
        return newString;
    }
    else if (num < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < num; i++) {
            newString += string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
