canFind = (bigrams, words) => {
  let bigram;
  let count = 0;
  const found = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j < words[i].length; j++) {
      bigram = words[i][j - 1] + words[i][j];
      if (!found.includes(bigram) && bigrams.includes(bigram)){
        count++;
        found.push(bigram);
      }
    }
    if (count === words.length)
      return true;
  }
  return false;
};

const bigrams = ["at", "be", "th", "au"];
const words = ["beautiful", "the", "hat"];

document.getElementById('ans').textContent = canFind(bigrams, words);