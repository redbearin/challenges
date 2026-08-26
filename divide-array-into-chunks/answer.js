chunkify = (arr, num) => {
  let newArr = [];
  let sub;
  for (let i = 0; i < arr.length; i += num) {
    sub = [];
    for (let j = i; j < i + num; j++) {
      if (j > arr.length - 1) {
        break;
      }
      sub.push(arr[j]);
    }
    newArr.push(sub);
  }
  return JSON.stringify(newArr);
}

const arr = [2, 3, 4, 5];
const num = 2;

document.getElementById('ans').textContent = chunkify(arr, num);