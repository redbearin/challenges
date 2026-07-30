rotateByOne = arr => JSON.stringify(arr.slice(-1).concat(arr.slice(0,-1)));

const arr = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = rotateByOne(arr);