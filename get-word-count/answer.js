countWords = str => str.split(' ').length;

const str = "What an easy task, right";

document.getElementById('ans').textContent = countWords(str);