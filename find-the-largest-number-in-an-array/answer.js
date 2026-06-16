findLargestNum = arr => arr.sort((a,b) => b - a)[0];

const arr = [1000, 1001, 857, 1];

document.getElementById('ans').textContent = findLargestNum(arr);

