posNegSort = arr => {
  let posNum = [];
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] > 0) {
      posNum.push(arr[i]);
    }
  }
  posNum.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = posNum.shift();
    }
  }
  return JSON.stringify(arr);
}

const arr = [6, 3, -2, 5, -8, 2, -2];

document.getElementById('ans').textContent = posNegSort(arr);

