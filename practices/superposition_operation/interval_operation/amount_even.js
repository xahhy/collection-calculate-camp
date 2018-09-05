'use strict';

function amount_even(collection) {
  return collection.filter(num=>num%2===0).reduce((sum, num)=>sum+=num, 0);
  //在这里写入代码
}

module.exports = amount_even;
