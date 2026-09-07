isShifted = (arr1, arr2) => {
  const base =   arr1[0] - arr2[0];
  for (let i = 1 ; i < arr1.length; i++) {
    if (arr1[i] - arr2[i] !== base) {
      return false;
    }
  }
  return true;
}

isMultiplied = (arr1, arr2) => {
  const base =   arr1[0] / arr2[0];
  for (let i = 1 ; i < arr1.length; i++) {
    if (arr1[i] / arr2[i] !== base) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 3]; 
const arr2 = [2, 3, 4];

document.getElementById('ans').textContent = isShifted(arr1, arr2);
document.getElementById('ans1').textContent = isMultiplied(arr1, arr2);
