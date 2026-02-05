arrayLessThan100 = arr => arr.reduce((acc, ele) => acc + ele, 0) < 100;

const arr = [5, 57];

document.getElementById('ans').textContent = arrayLessThan100(arr);