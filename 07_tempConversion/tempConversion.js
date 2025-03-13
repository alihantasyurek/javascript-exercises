
const convertToCelsius = function(F) {
  const res = (F - 32) * 5/9;
  if (!Number.isInteger(res)) return parseFloat(res.toFixed(1));
  return res;
};

const convertToFahrenheit = function(C) {
  const res = C * 9/5 + 32;
  if (!Number.isInteger(res)) return parseFloat(res.toFixed(1));
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
