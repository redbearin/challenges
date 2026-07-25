hasSpaces = str => str.replace(' ', '').length !== str.length;

const str = "hello, world";

document.getElementById('ans').textContent = hasSpaces(str);