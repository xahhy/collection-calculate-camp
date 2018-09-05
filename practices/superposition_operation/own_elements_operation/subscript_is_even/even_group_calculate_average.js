'use strict';
function groupBy(collection) {
  return collection.reduce(function (groups, item) {
    const val = (item + '').length;
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups
  }, {})
}
var even_group_calculate_average = function (collection) {
  let evenArray = [...collection.keys()].map(index => index + 1).filter(index => index % 2 === 0)
    .map(index => collection[index - 1]).filter(num => num % 2 === 0);
  if(evenArray.length === 0){
    console.log(evenArray);
    return [0];
  }
  let groups = groupBy(evenArray);
  let result = [];
  for (var key in groups) {
    result.push(groups[key].reduce((sum, num)=>sum+=num,0) / groups[key].length);
  }
  return result;
};
module.exports = even_group_calculate_average;
