const sumAll = function(index1, index2) {
    let sum = 0;
    let beginning = 0;
    let end = 0;
    if(index1 >= 0 && index2 >= 0 && typeof index1 === "number" && typeof index2 === "number"){
        if(index2 > index1){
            beginning = index1;
            end = index2;
        }else if(index1 > index2) {
            beginning = index2;
            end = index1;
        }
        for (let index = beginning; index <= end; index++){
                sum += index;
        }
        return sum;
    }else{
        return "ERROR";
    }
    
    
    
};

// Do not edit below this line
module.exports = sumAll;
