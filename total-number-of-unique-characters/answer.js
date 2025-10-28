countUnique = (w1, w2) => [...new Set(w1+w2)].length;

const w1 = "apple";
const w2 = "play";

document.getElementById('ans').textContent = countUnique(w1, w2);