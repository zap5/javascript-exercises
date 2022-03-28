const removeFromArray = function(array) {
    const args = Array.prototype.slice.call(arguments, 1);

    for (let i = 0; i < args.length; i++) {
        if (array.indexOf(args[i]) !== -1) {
            array.splice(array.indexOf(args[i]), 1);
        }
   }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
