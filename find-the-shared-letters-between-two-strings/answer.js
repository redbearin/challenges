sharedLetters = (word1, word2) => {
  const word2Arr = word2.toLowerCase().split('');
  word1 = word1.toLowerCase();
  const shared = [];
  for (let i = 0; i < word1.length; i++) {
   if (word2Arr.includes(word1[i]) && 
       !shared.includes(word1[i])) {
    shared.push(word1[i]);
   }
  }
  return shared.sort().join('');
}

const word1 = "Mickey";
const word2 = "mouse";

document.getElementById('ans').textContent = sharedLetters(word1, word2);