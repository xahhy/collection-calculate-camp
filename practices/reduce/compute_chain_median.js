'use strict';

function compute_chain_median(collection) {
  let chain = collection.split("->");
  let chainLength = chain.length;
  chain = chain.map(num=>parseInt(num)).sort((a,b)=>a-b);
  if (chainLength % 2 === 0) {
    return (parseFloat(chain[chainLength / 2 - 1]) + parseFloat(chain[chainLength / 2])) / 2;
  }else {
    return collection[parseInt(chainLength/2)];
  }
}

module.exports = compute_chain_median;
