const sharedLetters = (word1, word2) => {
  let shortest, longest;
  // assign words to shortest and longest
  // based on length and convert all letters 
  // to lowercase
  if (word1.length < word2.length) {
    shortest =  word1.toLowerCase();
    longest = word2.toLowerCase().split('');
  }
  else {
    shortest = word2.toLowerCase();
    longest = word1.toLowerCase().split('');
  }

  let shared = '';
  // go letter by letter in shortest word
  for (let i = 0; i < shortest.length; i++) {
    // find index of match in longest word
    index = longest.indexOf(shortest[i]);
    // there is a match
    if (index !== -1) {
      // mark that letter in longest word 
      // as matches
      longest[index] = '*';
      // add letter to shared string
      shared += shortest[i];
    }
  } 
  // short the shared string
  return shared.split('').sort().join('');
};

const word1 = "house";
const word2 = "villa";

document.getElementById('ans').textContent = sharedLetters(word1, word2);