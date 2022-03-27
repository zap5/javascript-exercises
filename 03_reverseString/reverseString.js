const reverseString = function(string) {
    result = '';

    for (let i = string.length; i >= 0; i--) {
        result += string.charAt(i);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
