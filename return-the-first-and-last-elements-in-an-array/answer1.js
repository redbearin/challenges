firstLast = arr => JSON.stringify([arr.slice(0,1), arr.slice(-1)].flat());

const arr = [5, 10, 15, 20, 25];

document.getElementById('ans').textContent = firstLast(arr);