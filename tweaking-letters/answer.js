tweakLetters = (word, arr) => {
  let newWord = '';
  let letNum;
  for (let i = 0; i < word.length; i++) {
   letNum = word.charCodeAt(i) + arr[i];
   if (letNum === 123) {
    letNum = 97;
   }
   if (letNum === 96) {
    letNum = 122;
   }
   newWord += String.fromCharCode(letNum);
  }
  return newWord;
}

const word = "apple";
const arr = [0, 1, -1, 0, -1];

document.getElementById('ans').textContent = tweakLetters(word, arr);