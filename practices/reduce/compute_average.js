'use strict';

function compute_average(collection) {
  return collection.reduce((sum, num)=>sum+=num) / collection.length;
}

module.exports = compute_average;

