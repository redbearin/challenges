consecutiveCombo = (arr1, arr2) => {
  const combArr = arr1.concat(arr2);
  combArr.sort();
  if (combArr[combArr.length - 1] - combArr[0] === combArr.length - 1) {
    return true;
  }
  return false;
}

const arr1 = [7, 4, 5, 1];
const arr2 = [2, 3, 6];

document.getElementById('ans').textContent = consecutiveCombo(arr1, arr2);