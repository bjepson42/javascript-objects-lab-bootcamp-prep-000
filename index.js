var obj = { recipes: 'bar'};

var recipes = Object.assign({})

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {key, value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){


}

function deleteFromObjectByKey(object, key){


}
