simpleComp = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(Math.pow(arr1[i], 2)))
      return false;
  }
  return true;
}

const arr1 = [2, 2, 3];
const arr2 = [4, 4, 9];

document.getElementById('ans').textContent = simpleComp(arr1, arr2);