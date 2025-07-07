negate = arr => JSON.stringify(arr.map(ele => -ele));

const arr = [1, 2, 3, 4];

document.getElementById('ans').textContent = negate(arr);