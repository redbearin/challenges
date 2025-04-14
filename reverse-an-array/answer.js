reverse = arr => JSON.stringify(arr.reverse());

const arr = [1, 2, 3, 4];

document.getElementById('ans').textContent = reverse(arr);