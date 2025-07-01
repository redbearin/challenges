replaceVowels = (str, rep) => str.replace(/[aeiou]/g, rep);

const str = "minnie mouse"; 
const rep = "?";

document.getElementById('ans').textContent = replaceVowels(str, rep);