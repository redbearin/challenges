removeFirstLast = str => str.length < 3 ? str : str.slice(1, -1);

const str = "hello";

document.getElementById('ans').textContent = removeFirstLast(str);