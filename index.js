//var recipes={egg:3,flour: 1,milk:1}
function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]= value
  return obj
}
