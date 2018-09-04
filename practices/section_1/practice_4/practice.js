function collect_same_elements(collection_a, object_b) {
  return collection_a.map(itemA=>itemA.key).filter(itemA=>object_b.value.indexOf(itemA) > -1);
}

module.exports = collect_same_elements;
