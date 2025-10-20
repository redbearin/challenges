additiveInverse = arr => JSON.stringify(arr.map((ele) => -ele));

const arr = [-5, -25, 35];

document.getElementById('ans').textContent = additiveInverse(arr);