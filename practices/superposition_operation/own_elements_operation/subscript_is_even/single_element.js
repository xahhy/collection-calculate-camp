'use strict';
var single_element = function (collection) {
  let evenArray = [...collection.keys()].map(index => index + 1)
    .filter(index => index % 2 === 0)
    .map(index => collection[index - 1]);
  return evenArray.filter(num => evenArray.indexOf(num) === evenArray.lastIndexOf(num));
};
module.exports = single_element;
