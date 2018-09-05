'use strict';

function hybrid_operation(collection) {

  return collection.map(num=>num*3+2).reduce((sum, num)=> sum+=num, 0);
}

module.exports = hybrid_operation;

