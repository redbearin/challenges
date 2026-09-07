countVowels = str => (str.match(/[aeiou]/gi) || []).length;

const str = "jAvascriPt";

document.getElementById('ans').textContent = countVowels(str);