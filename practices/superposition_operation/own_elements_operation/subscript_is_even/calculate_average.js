'use strict';
var calculate_average = function (collection) {
  let evenArray = [...collection.keys()].map(index=>index+1).filter(index => index % 2 === 0)
    .map(index => collection[index-1]);
  return evenArray.reduce((sum, num) => sum += num, 0) / evenArray.length;
};
module.exports = calculate_average;
