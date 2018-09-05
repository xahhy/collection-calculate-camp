'use strict';
function rank_by_two_large_one_small(collection){
  let groupArray=[];
  while (collection.length > 0){
    collection = collection.sort((a,b)=>a-b);
    groupArray.push(collection.splice(0, 3));
  }
  for (let item in groupArray) {
    if(groupArray[item].length === 3)
      groupArray[item].push(groupArray[item].shift());
  }
  return groupArray.reduce((acc, item)=>acc.concat(item), []);
}
module.exports = rank_by_two_large_one_small;
