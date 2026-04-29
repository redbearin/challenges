const countTrue = arr => arr.filter(n => n === true).length;

const arr = [false, false, false, false];

document.getElementById('ans').textContent = countTrue(arr);