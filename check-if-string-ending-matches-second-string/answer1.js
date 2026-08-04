checkEnding = (str1, str2) => str1.endsWith(str2);

const str1 = "abc";
const str2 = "bc";

document.getElementById('ans').textContent = checkEnding(str1, str2);