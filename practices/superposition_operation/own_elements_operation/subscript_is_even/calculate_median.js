'use strict';

function middle_number(collection) {
  let chainLength = collection.length;
  collection = collection.map(num => parseInt(num)).sort((a, b) => a - b);
  if (chainLength % 2 === 0) {
    return Math.ceil((parseFloat(collection[chainLength / 2 - 1]) + parseFloat(collection[chainLength / 2])) / 2);
  } else {
    return collection[parseInt(chainLength / 2)];
  }
}
var calculate_median = function(collection){
  let evenArray = [...collection.keys()].map(index=>index+1).filter(index => index % 2 === 0)
    .map(index => collection[index-1]);
  return middle_number(evenArray);
};
module.exports = calculate_median;
