'use strict';

function double_to_one(collection) {
  return collection.reduce((result, item) => Array.from(new Set(result.concat(item))), []);
}

module.exports = double_to_one;
