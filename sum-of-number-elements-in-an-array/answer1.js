numbersSum = arr => arr.reduce((acc, ele) => acc + (typeof ele === 'number' ? ele : 0), 0);

const arr = [1, 2, "13", "4", "645"];

document.getElementById('ans').textContent = numbersSum(arr);