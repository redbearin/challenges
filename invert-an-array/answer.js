invertArray = arr => JSON.stringify(arr.map((ele) => -ele));
const arr = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = invertArray(arr);