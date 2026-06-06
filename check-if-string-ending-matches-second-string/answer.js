checkEnding = (str1, str2) => str1.slice(-str2.length) === str2;

const str1 = "abc";
const str2 = "bc";

document.getElementById('ans').textContent = checkEnding(str1, str2);