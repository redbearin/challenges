const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

const str = "rhythm";

document.getElementById('ans').textContent = countVowels(str);