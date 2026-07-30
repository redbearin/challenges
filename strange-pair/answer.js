isStrangePair = (word1, word2) => word1[0] === word2[word2.length - 1] && word1[word1.length - 1] === word2[0];

const word1 = "sparkling";
const word2 = "groups";

document.getElementById('ans').textContent = isStrangePair(word1, word2);