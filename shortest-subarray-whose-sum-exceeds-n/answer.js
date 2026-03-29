minLength = (arr, n) => {
  let count = 1;
  let sub;
  while (count <= arr.length) {
    for (let i = 0; i < arr.length - count + 1; i++) {
      sub = arr.slice(i, i + count)
      if (sub.reduce((acc, ele) => acc + ele) > n) {
        return count;
      }
    }
    count++;
  }
  return -1;
}

const arr = [5, 8, 2, -1, 3, 4];
const n = 9;

document.getElementById('ans').textContent = minLength(arr, n);

