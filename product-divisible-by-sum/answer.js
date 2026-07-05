divisible = arr => arr.reduce((acc, ele) => acc * ele) % arr.reduce((acc, ele) => acc + ele) === 0;

const arr = [3, 2, 4, 2];

document.getElementById('ans').textContent = divisible(arr);