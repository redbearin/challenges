largerThanRight = arr => {
  let flag;
  const largerThanAll = [];
  for (let i = 0; i < arr.length; i++) {
    flag = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      largerThanAll.push(arr[i]);
    }
  }
  return JSON.stringify(largerThanAll);
}

const arr = [5, 9, 8, 7];

document.getElementById('ans').textContent = largerThanRight(arr);