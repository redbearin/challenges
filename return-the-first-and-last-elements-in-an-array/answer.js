firstLast = arr => JSON.stringify([arr[0], arr[arr.length - 1]]);

const arr = [5, 10, 15, 20, 25];

document.getElementById('ans').textContent = firstLast(arr);