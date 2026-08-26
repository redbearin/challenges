countOverlapping = (arr, num) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i][0] <= num && arr[i][1] >= num) {
      count++;
    }
  }
  return count;
}

const arr = [[1, 2], [2, 3], [3, 4]];
const num = 5;

document.getElementById('ans').textContent = countOverlapping(arr, num);