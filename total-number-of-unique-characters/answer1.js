countUnique = (str1, str2) => new Set(str1 + str2).size;

const str1 = "apple";
const str2 = "play";

document.getElementById('ans').textContent = countUnique(str1, str2);