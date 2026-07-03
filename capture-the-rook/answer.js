canCapture = arr => arr[0][0] === arr[1][0] || arr[0][1] === arr[1][1];

const arr = ["A8", "E8"];

document.getElementById('ans').textContent = canCapture(arr);