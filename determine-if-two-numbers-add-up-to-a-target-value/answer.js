sumOfTwo = (arr1, arr2, val) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++){
      if (arr1[i] + arr2[j] === val) {
        return true;
      }
    }
  }
  return false;
}

const arr1 = [1, 2];
const arr2 = [4, 5, 6];
const val = 5;

document.getElementById('ans').textContent = sumOfTwo(arr1, arr2, val);