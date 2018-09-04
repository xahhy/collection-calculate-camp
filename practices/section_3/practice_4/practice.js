var count_same_elements = require("../../section_2/practice_2/practice.js");
var create_updated_collection_2 = require("../../section_3/practice_2/practice.js");

function create_updated_collection(collection_a, object_b) {
  return create_updated_collection_2(count_same_elements(collection_a), object_b);
}

module.exports = create_updated_collection;
