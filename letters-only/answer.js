lettersOnly = str => str.replace(/[^A-Za-z]/g, "");

const str = "^U)6$22>8p).";

document.getElementById('ans').textContent = lettersOnly(str);