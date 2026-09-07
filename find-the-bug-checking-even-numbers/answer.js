checkAllEven = arr => arr.every(ele => ele % 2 === 0);

const arr = [1, 2, 3, 4];

document.getElementById('ans').textContent = checkAllEven(arr);