modifyLast = (str, num) => str + str.slice(-1).repeat(num - 1);

const str = "Hello";
const num = 3;

document.getElementById('ans').textContent = modifyLast(str, num);