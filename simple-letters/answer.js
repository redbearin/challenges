longestString = (str1, str2) => [...new Set(str1 + str2)].sort().join('');

const str1 = "mubashir"
const str2 = "edabit";

document.getElementById('ans').textContent = longestString(str1, str2);