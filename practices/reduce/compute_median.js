'use strict';

function compute_median(collection) {
  let chainLength = collection.length;
  collection = collection.map(num=>parseInt(num)).sort((a,b)=>a-b);
  if (chainLength % 2 === 0) {
    return (parseFloat(collection[chainLength / 2 - 1]) + parseFloat(collection[chainLength / 2])) / 2;
  }else {
    return collection[parseInt(chainLength/2)];
  }
}

module.exports = compute_median;


