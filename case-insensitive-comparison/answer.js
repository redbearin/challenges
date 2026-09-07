match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

const str1 = "hello";
const str2 = "hELLo";

document.getElementById('ans').textContent = match(str1, str2);