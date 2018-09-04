'use strict';

function choose_no_repeat_number(collection) {
  let charMap={};
  return collection.filter(item=>{
    if(charMap[item]){
      return false;
    }else{
      charMap[item]=true;
      return true;
    }
  })
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
