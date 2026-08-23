sharedLetters = (word1, word2) => {
  let count = 0;
  const uniq1 = [... new Set(word1.split(''))];
  for (let i = 0; i < uniq1.length; i++) {
    if (word2.includes(uniq1[i])) {
      count++;
    }
  }
  return count;
}

const word1 = "apple";
const word2 = "meaty"

document.getElementById('ans').textContent = sharedLetters(word1, word2);