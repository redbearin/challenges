isInOrder = str => str.split('').sort().join('') === str;

const str = "edabit";

document.getElementById('ans').textContent = isInOrder(str);