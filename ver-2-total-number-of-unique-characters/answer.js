countUnique = (str1, str2) => [...new Set((str1 + str2).split(''))].length;

const str1 = "apple";
const str2 = "play";

document.getElementById('ans').textContent = countUnique(str1, str2);