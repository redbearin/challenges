middleEarth = arr => Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) === 1;

const arr = ["Frodo", "Sam", "Gandalf"];

document.getElementById('ans').textContent = middleEarth(arr);