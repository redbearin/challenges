addIndexes = arr => JSON.stringify(arr.map((ele, idx) => ele + idx));

const arr = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = addIndexes(arr);