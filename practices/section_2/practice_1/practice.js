function count_same_elements(collection) {
  let countMap=[];
  let resultMap=[];
  collection.forEach(item=> countMap[item] = countMap[item] ? ++countMap[item] : 1);
  for (key in countMap) {
    resultMap.push({key: key, count: countMap[key]})
  }
  return resultMap;
}

module.exports = count_same_elements;
