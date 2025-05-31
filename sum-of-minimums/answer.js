sumMinimums = arr => arr.reduce((acc, sub) => acc + Math.min(...sub), 0);

const arr = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
];

document.getElementById('ans').textContent = sumMinimums(arr);