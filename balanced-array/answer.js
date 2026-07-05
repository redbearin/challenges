balanced = arr => {
  let sumLt = 0;
  let sumRt = 0;
  for (let i = 0; i < arr.length/2; i++) {
    sumLt += arr[i];
    sumRt += arr[arr.length - (i + 1)];
  }
  if (sumLt === sumRt) {
    return JSON.stringify(arr);
  }
  if (sumLt > sumRt) {
    return JSON.stringify(arr.slice(0, arr.length/2).concat(arr.slice(0, arr.length/2)))
  }
  return JSON.stringify(arr.slice(arr.length/2).concat(arr.slice(arr.length/2)))
}

const arr = [88, 3, 27, 5, 9, 0, 13, 10];

document.getElementById('ans').textContent = balanced(arr);