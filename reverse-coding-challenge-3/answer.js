mysteryFunc = (arr, num) => JSON.stringify(arr.map((ele) => ele % num));

const arr = [5, 7, 8, 2, 1];
const num = 2;

document.getElementById('ans').textContent = mysteryFunc(arr, num);
