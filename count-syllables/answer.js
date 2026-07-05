numberSyllables = word => word.split('-').length;

const word = "buf-fet";

document.getElementById('ans').textContent = numberSyllables(word);

