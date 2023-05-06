const luckySeven = arr => {
  // not enough elements
  if (arr.length < 3)
    return false;
  // remove non-integers
  const cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]))
      cleanArr.push(arr[i]);
  }
  // not enough elements in cleaned arr
  if (cleanArr.length < 3) {
    return false;
  };  
  // build combinations and check for sum = 7
  for (let i = 0; i < cleanArr.length; i++) {
      for (let j = i + 1; j < cleanArr.length; j++) {
        for (let k = j + 1; k < cleanArr.length; k++) {
            if (cleanArr[i] + cleanArr[j] + cleanArr[k] === 7) {
              return true;
            }
        }
      }
  }
  return false; 
}


const arr = [2, 4, 3, 8, 9, 1];

document.getElementById("ans").textContent = luckySeven(arr);