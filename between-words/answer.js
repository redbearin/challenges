isBetween = (first, last, word) => first < word && word < last;

const first = "bookend";
const last = "boolean";
const word = "boost";

document.getElementById('ans').textContent = isBetween(first, last, word);