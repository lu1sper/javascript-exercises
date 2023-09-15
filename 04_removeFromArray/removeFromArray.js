const removeFromArray = function() {
    let array = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            if(arguments[index] === array[index2]){
                array.splice(index2, 1);
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
