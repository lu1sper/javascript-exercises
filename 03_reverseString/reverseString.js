const reverseString = function(string) {
    let start = string.length - 1;
    console.log(start);
    let reversedString = "";
    for (let index = start; index >= 0; index--) {
        console.log(string[index]);
        reversedString += string[index];
    }
    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
