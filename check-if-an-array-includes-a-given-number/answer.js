check = (arr, num) => arr.includes(num);

const arr = [1, 1, 2, 1, 1];
const num = 3;

document.getElementById('ans').textContent = 
check(arr, num);