isAntiArray = (arr1, arr2) => 
  arr1.join('') === arr2.join('') ? false : [...new Set(arr1)].sort().join('') === [...new Set(arr2)].sort().join('');

const arr1 = ["1", "0", "0", "1"];
const arr2 = ["0", "1", "1", "0"];

document.getElementById('ans').textContent = isAntiArray(arr1, arr2);