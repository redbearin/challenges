hasSpaces = str => str.includes(' ');

const str = "hello, world";

document.getElementById('ans').textContent = hasSpaces(str);
