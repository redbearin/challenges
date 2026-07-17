sub = (arr1, arr2) => {
  const newArr = [];
  let sub;
  for (let i = 0; i < arr1.length; i++) {
    sub = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sub.push (arr1[i][j] - arr2[i][j]);
    }
    newArr.push(sub);
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

document.getElementById('ans').textContent = sub(arr1, arr2);