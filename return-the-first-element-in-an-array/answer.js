getFirstValue = arr => JSON.stringify(arr[0]);

const arr = [80, 5, 100];

document.getElementById('ans').textContent = getFirstValue(arr);