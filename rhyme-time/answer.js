doesRhyme = (sent1, sent2) => {
  const sent1Arr = sent1.split(' ');
  const sent2Arr = sent2.split(' ');
  const lstWordSent1 = sent1Arr[sent1Arr.length - 1];
  const lstWordSent2 = sent2Arr[sent2Arr.length - 1];
  let longestWd, shortestWd;

  // last word of first sentence longer or the same size
  // as the last word from the second sentence
  if (lstWordSent1.length >= lstWordSent2.length) {
    longestWd = lstWordSent1.toLowerCase();
    shortestWd = lstWordSent2.toLowerCase();
  }
    // last word of second sentence longer than
  // the last word from the first sentence
  else {
    longestWd = lstWordSent2.toLowerCase();;
    shortestWd = lstWordSent1.toLowerCase();
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // go letter by letter through the longest word
  for (let i = 0; i < longestWd.length; i++) {
    // vowel in longest word
    if (vowels.includes(longestWd[i])) {
      // shortest word does not include the vowel in 
      // longest word
      if (!shortestWd.includes(longestWd[i]))
        return false;
    }
  }
  // shortest and longest words have the same vowels
  return true;
}

const sent1 = "and frequently do?";
const sent2 = "you gotta move.";

document.getElementById('ans').textContent = doesRhyme(sent1, sent2)