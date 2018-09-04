'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum, num)=>sum+=num, 0);
}

module.exports = calculate_elements_sum;

