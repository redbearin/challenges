isValid = str => /^[A-Z]\. [A-Z]\.$/.test(str.trim()) || /^[A-Z]\. [A-Z]\. [A-Z]\.$/.test(str.trim());

const str = "    C. B.";

document.getElementById('ans').textContent = isValid(str);