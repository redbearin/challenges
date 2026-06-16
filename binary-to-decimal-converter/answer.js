binaryToDecimal = arr => parseInt(arr.join(''), 2);

const arr = [1, 1, 1, 1, 1, 1, 1, 1];

document.getElementById('ans').textContent = binaryToDecimal(arr);