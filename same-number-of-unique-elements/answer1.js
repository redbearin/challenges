same = (arr1, arr2) => arr1.filter((value, index) => arr1.indexOf(value) === index).length === (arr2.filter((value, index) => arr2.indexOf(value) === index)).length;

const arr1 = [1, 3, 4, 4, 4];

const arr2 = [2, 5, 7];

document.getElementById('ans').textContent = same(arr1, arr2);