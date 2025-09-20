minimumRemovals = arr => arr.reduce((acc,ele) => ele + acc, 0) % 2 === 0 ? 0 : 1;

const arr = [5, 7, 9, 11];

document.getElementById('ans').textContent = minimumRemovals(arr);