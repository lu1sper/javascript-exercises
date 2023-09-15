const fibonacci = function(number) {
    number = parseInt(number);
    let fibArray = [1, 1];
    if (number <= 0){
        return "OOPS";
    }
    for (let index = 0; index < number; index++) {
        fibArray[index + 2] = fibArray[index] + fibArray[index + 1];
    }
    return fibArray[number - 1];

};

// Do not edit below this line
module.exports = fibonacci;
