function create_updated_collection(collection_a, object_b) {
  return collection_a.map(itemA=>{
    if(object_b.value.indexOf(itemA.key) > -1){
      itemA.count-= parseInt(itemA.count/3);
    }
    return itemA;
  })}

module.exports = create_updated_collection;
