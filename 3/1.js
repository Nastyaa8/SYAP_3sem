let arr = [1, [1, 2, [3, 4]], [2, 4]];

let flattenedArray = arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.flat() : curr), []);
console.log(flattenedArray);


