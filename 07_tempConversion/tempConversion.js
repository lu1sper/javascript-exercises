const convertToCelsius = function(fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;
  let fixedResult = parseFloat(result.toFixed(1))
  return fixedResult;
};

const convertToFahrenheit = function(celcius) {
  let result = ((celcius * 9) / 5) + 32;
  let fixedResult = parseFloat(result.toFixed(1))
  return fixedResult;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
