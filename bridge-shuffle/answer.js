bridgeShuffle = (arr1, arr2) => {
  let idx = 1;
  for (let i = 0; i < arr2.length; i++) {
    arr1.splice(idx, 0, arr2[i])
    idx += 2;
  } 
  return JSON.stringify(arr1);
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6];

document.getElementById('ans').textContent = bridgeShuffle(arr1, arr2);