concat = (arr1, arr2) => JSON.stringify(arr1.concat(arr2).sort((a,b) => a-b));

const arr1 = [4, 5, 1];

const arr2 = [3, 3, 3, 3, 3];

document.getElementById('ans').textContent = concat(arr1, arr2);