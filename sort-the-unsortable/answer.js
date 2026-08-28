sortIt = arr => JSON.stringify(arr.sort((a, b) => a - b));

const arr = [4, [1], 3];

document.getElementById('ans').textContent = sortIt(arr);