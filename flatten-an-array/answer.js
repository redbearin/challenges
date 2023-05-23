let flatArray = [];

flattenArray = (arr) => {
  let len;
  if (!arr)
    len = 0;
  else 
    len = arr.length;
  // go element by element through array
  for (let i = 0; i < len; i++) {
    // if a function execute and add to flatArray
    if (typeof arr[i] === "function") 
      flatArray.push(arr[i]());
    // if is an object, number or string
    // add to the flatArray
    if (typeof arr[i] === "number" || typeof arr[i] === "string" || typeof arr[i] === 'object' && arr[i] !== null && !Array.isArray(arr[i])) 
      flatArray.push(arr[i]);
    // if it is an array go through the process to break it apart
    else 
      flattenArray(arr[i]);
  }
}

console.log(flatArray);

const arr = [1, 2, [3, [4, 5], 6], 7, 8];

document.getElementById('ans').textContent = flattenArray(arr);