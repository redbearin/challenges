getSumOfItems = arr => arr.reduce((acc, val) => acc + val, 0);

const arr = [-2, 84, 23];

document.getElementById('ans').textContent = getSumOfItems(arr);