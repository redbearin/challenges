findLargestNum = arr => arr.sort((a,b) => b - a)[0];

const arr = [300, 200, 600, 150];

document.getElementById('ans').textContent = findLargestNum(arr);