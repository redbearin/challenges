zipper = (arr1, arr2) => {
  if (arr1[arr1.length - 1] !== 
      arr2[arr2.length - 1]) {
    return false;
  }
  for (let i = 1; i < Infinity; i++) {
    if (arr1[arr1.length - i] === undefined 
        && arr2[arr2.length - i] === undefined) {
      return true;
    }
    if (arr1[arr1.length - i] !== 
        arr2[arr2.length - i]) {
      return JSON.stringify([arr1.length - i, arr2.length - i]);
    }
  }
}

const arr1 = [5, 5, 7, 8, 9, 1, 2];
const arr2 = [3, 2, 1, 1, 6, 6, 6, 6, 1, 2];

document.getElementById('ans').textContent = zipper(arr1, arr2);