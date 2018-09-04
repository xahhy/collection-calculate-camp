function count_same_elements(collection) {
  let countMap = [];
  let resultMap = [];
  const action = (map, key) => {
    if (key.indexOf("-") > -1) {
      let tmp = key.split('-');
      let number = parseInt(tmp[1]);
      map[tmp[0]] = map[tmp[0]] ? map[tmp[0]] += number : number;
    } else if (key.indexOf(':') > -1) {
      let tmp = key.split(':');
      let number = parseInt(tmp[1]);
      map[tmp[0]] = map[tmp[0]] ? map[tmp[0]] += number : number;
    } else if (key.indexOf('[') > -1) {
      let tmp = key.split('[');
      let number = parseInt(key.replace(/[^\d]/g, ''));
      map[tmp[0]] = map[tmp[0]] ? map[tmp[0]] += number : number;
    }
    else {
      if (countMap[key]) {
        map[key]++;
      } else {
        map[key] = 1;
      }
    }
  };
  collection.forEach(item => action(countMap, item));
  for (key in countMap) {
    resultMap.push({name: key, summary: countMap[key]})
  }
  return resultMap;
}

module.exports = count_same_elements;
