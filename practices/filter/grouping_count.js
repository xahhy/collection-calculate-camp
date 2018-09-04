'use strict';

function grouping_count(collection) {
  let numMap = {};
  collection.forEach(item => numMap[item] = numMap[item] ? ++numMap[item] : 1);
  return numMap;
}

module.exports = grouping_count;
