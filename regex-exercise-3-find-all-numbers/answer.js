findNums = str => str.match(/-?\d+(\.\d+)?/g);

str = "-1.5 0 2 -123.4.";

document.getElementById('ans').textContent = findNums(str);