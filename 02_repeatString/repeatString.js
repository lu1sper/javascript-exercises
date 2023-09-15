const repeatString = function(string, repeatTimes) {
    let text = "";
    if(repeatTimes < 0){
        return "ERROR";
    }
    for (let index = 0; index < repeatTimes; index++) {
        text += string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
