isFirstSuperior = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return true;
    }
  }
  return false;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 4, 4];

document.getElementById('ans').textContent = isFirstSuperior(arr1, arr2);