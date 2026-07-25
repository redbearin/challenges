removeVowels = str => str.replace(/[aeiouAEIOU]/, "")

const str = "candy";

document.getElementById('ans').textContent = removeVowels(str);