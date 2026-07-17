toNumberArray = arr => JSON.stringify(arr.map(Number));

const arr = ["1", "3", "3.6"];

document.getElementById('ans').textContent = toNumberArray(arr);