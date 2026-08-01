checkEquals = (arr1, arr2) => arr1.join(' ') === arr2.join(' ') ? true: false;

const arr1 = [1, 12];
const arr2 = [11, 2];

document.getElementById('ans').textContent = checkEquals(arr1, arr2);