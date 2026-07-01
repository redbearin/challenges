concat = (arr1, arr2) => JSON.stringify(arr1.concat(arr2));

const arr1 = [1, 3, 5];
const arr2 = [2, 6, 8];

document.getElementById('ans').textContent = concat(arr1, arr2);