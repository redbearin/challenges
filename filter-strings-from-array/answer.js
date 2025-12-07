filterArray = arr => JSON.stringify(arr.filter(ele => Number.isInteger(ele)));

const arr = [1, 2, 3, "a", "b", 4];

document.getElementById('ans').textContent = filterArray(arr);