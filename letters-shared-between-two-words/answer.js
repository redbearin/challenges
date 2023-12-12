const sharedLetters = (word1, word2) => {
  // set the longest and shortest words
  if (word2.length > word1.length) {
    shortest = word1;
    longest = word2;
  }
  else {
    shortest = word2;
    longest = word1;
  }
  // initialize the duplicate count
  let count = 0;

  // go letter by letter through shortest 
  // word and see if those letters are in the
  // longer word, if so increment the count
  for (let i = 0; i < shortest.length; i++) {
    if (longest.includes(shortest[i]))
      count++;
  }
  return count;
}

const word1 =  "spout";
const word2 = "shout";

document.getElementById('ans').textContent = sharedLetters(word1, word2);