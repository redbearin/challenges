freedPrisoners = arr => {
  if (arr[0] === 0) {
    return 0;
  }
  let count = 0;
  let idx = 0;
  let flag = false;
  while (idx < arr.length) {
    for (let i = idx; i < arr.length; i++) {
      if (!flag) {
        if (arr[i] === 1) {
          idx = i + 1;
          count++;
          flag = true;
        }
      } 
      else {
        if (arr[i] === 0) {
          arr[i] = 1;
        }
        else {
          arr[i] = 0;
        }
      }
      if (i === arr.length - 1) {
        if (!flag) {
          return count;
        }
        flag = false;
      }
    }
  }
  return count;
}
const arr = [1, 1, 0, 0, 0, 1, 0];

document.getElementById('ans').textContent = freedPrisoners(arr);