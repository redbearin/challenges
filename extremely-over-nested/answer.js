deNest = arr => arr.flat();

const arr = [[[[[[[true]]]]]]];

document.getElementById('ans').textContent = deNest(arr);