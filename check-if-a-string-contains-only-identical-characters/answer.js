isIdentical = str => [...new Set(str.split(''))].length === 1;

const str = "aaaaaa";

document.getElementById('ans').textContent = isIdentical("aaaaaa");