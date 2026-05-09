hurdleJump = (arr, height) => arr.filter((ele) => height > ele).length === arr.length;

const arr = [5, 4, 5, 6];
const height = 10;

document.getElementById('ans').textContent = hurdleJump(arr, height);