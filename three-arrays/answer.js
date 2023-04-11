sumCommon = (arr1, arr2, arr3) => {
  console.log('hi')
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) 
      sum += arr1[i];
  }
  return sum;
}
const arr1 = [1];
const arr2 = [1];
const arr3 = [2];

document.getElementById('ans').textContent = sumCommon(arr1, arr2, arr3);