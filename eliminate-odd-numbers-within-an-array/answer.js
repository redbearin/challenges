noOdds = arr => JSON.stringify(arr.filter(ele => !(ele % 2)));

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

document.getElementById('ans').textContent = noOdds(arr);