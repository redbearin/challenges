flatten = arr => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return JSON.stringify(arr2); 
}

const arr = [[1, 2], [3, 4]];

document.getElementById('ans').textContent = flatten(arr);