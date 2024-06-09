isOrthogonal = (arr1, arr2) => {
  let dotPro = 0;
  for (let i = 0; i < arr1.length; i++) {
    dotPro += arr1[i] * arr2[i];
  }
  if (dotPro === 0) {
    return true;
  }
  return false;
}
const arr1 = [1, 2];
const arr2 = [2, -1];
document.getElementById('ans').textContent = isOrthogonal(arr1, arr2);