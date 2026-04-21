same = (arr1, arr2) => [...new Set(arr1)].length === [...new Set(arr2)].length;

const arr1 = [1, 3, 4, 4, 4];

const arr2 = [2, 5, 7];

document.getElementById('ans').textContent = same(arr1, arr2);