arrBetween = (num1, num2, arr) => JSON.stringify(arr.filter((ele) => ele> num1 && ele < num2));

const num1 = 3;
const num2 = 8;
const arr = [1, 5, 95, 0, 4, 7];

document.getElementById('ans').textContent = arrBetween(num1, num2, arr);