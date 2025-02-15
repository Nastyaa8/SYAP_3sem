let nestedArray = [1, [2, [3, 4]], [5, 6]];

function sumArray(arr) 
{
  return arr.reduce((acc, curr) => 
  {
    if (Array.isArray(curr)) 
    {
      return acc + sumArray(curr);
    }
    return acc + curr;
  }, 0);
}

let sum = sumArray(nestedArray);
console.log(sum);