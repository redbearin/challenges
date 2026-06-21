findSmallestNum = arr => arr.sort((a, b) => a - b)[0];

const arr = [34, 15, 88, 2];

document.getElementById('ans').textContent = findSmallestNum(arr);