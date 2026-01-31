existsHigher = (arr, num) => Math.max(...arr) > num;

const arr = [5, 3, 15, 22, 4];
const num = 10;

document.getElementById('ans').textContent = existsHigher(arr, num);