existsHigher = (arr, num) => arr.sort((a,b) => b - a)[0] > num;

const arr = [5, 3, 15, 22, 4];
const num = 10;

document.getElementById('ans').textContent = existsHigher(arr, num);