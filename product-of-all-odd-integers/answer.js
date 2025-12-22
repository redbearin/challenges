oddProduct = arr => arr.filter(ele => ele % 2 !== 0).reduce((acc,ele) => acc * ele, 1);

const arr = [3, 4, 1, 1, 5];

document.getElementById('ans').textContent = oddProduct(arr);