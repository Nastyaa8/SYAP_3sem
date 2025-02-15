function extend(...objects) 
{
  return Object.assign({}, ...objects);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let obj3 = { d: 4 };

let mergedObj = extend(obj1, obj2, obj3);
console.log(mergedObj);

