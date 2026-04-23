blahBlah = (phrase, numWords) => {
  const phraseArr = phrase.split(' ');
  for (let i = 1; i <= numWords; i++) {
    if (phraseArr[phraseArr.length - i] === undefined) {
      break;
    }
    phraseArr[phraseArr.length - i] = 'blah';
  }
  return phraseArr.join(' ') + "...";
}

const phrase = "A function is a block of code which only runs when it is called";
const numWords = 5;

document.getElementById('ans').textContent = blahBlah(phrase, 5);