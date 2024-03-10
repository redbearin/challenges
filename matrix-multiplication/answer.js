const mul = (arr1, arr2) => {
  const newArr = [];
  // initialize the sum
  let sum = 0;
  let sub = [];
  // row by row
  for (let i = 0; i < arr1.length; i++) {
    // column by column
    for (let j = 0; j < arr1[i].length; j++) {
      // handle operation
      for (let k = 0; k < arr1[i].length; k++) {
        // add product of element in row and
        // element in column
        sum += arr1[i][k] * arr2[k][j];
      }
      sub.push(sum);
      sum = 0;
    }
    newArr.push(sub);
    sub = [];
  }
  return JSON.stringify(newArr);
}
const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
document.getElementById('ans').textContent = mul(arr1, arr2);