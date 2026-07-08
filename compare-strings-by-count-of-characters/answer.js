comp = (str1, str2) => str1.length === str2.length;

const str1 = "ABC";
const str2 = "DE";

document.getElementById('ans').textContent = comp("ABC", "DE");