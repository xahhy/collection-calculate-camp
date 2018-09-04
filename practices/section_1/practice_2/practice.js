function flat(collection) {
  return collection.reduce((a,b)=>a.concat(b), []);
}
function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(itemA=>flat(collection_b).indexOf(itemA) > -1);
}

module.exports = collect_same_elements;
