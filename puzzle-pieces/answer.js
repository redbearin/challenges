puzzlePieces = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const sum = arr1[0] + arr2[0];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] + arr2[i] !== sum) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 8, 5, 0, -1, 7];
const arr2 = [0, -7, -4, 1, 2, -6];

document.getElementById('ans').textContent = puzzlePieces(arr1, arr2);