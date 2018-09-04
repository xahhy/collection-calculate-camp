function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(itemA => collection_b.indexOf(itemA) > -1);
}

module.exports = collect_same_elements;
