sameCase = str => str.toUpperCase() === str || str.toLowerCase() === str;

const str = "hello";

document.getElementById('ans').textContent = sameCase(str);