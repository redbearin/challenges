const findOccurrences = (phrase, ltr) => {
  // split phrase into arr of words
  const phraseArr = phrase.split(' ');
  // ltr lowercase
  const lowerCaseLtr = ltr.toLowerCase();
  const ltrCounts = {};
  let count, lowerCaseWord;
  // go word by word thru phraseArr
  for (let i = 0; i < phraseArr.length; i++) {
    count = 0;
    lowerCaseWord = phraseArr[i].toLowerCase();
    // go letter by letter thru each word
    for (let j = 0; j < lowerCaseWord.length; j++) {
      if (lowerCaseWord[j] === lowerCaseLtr)
        count++; 
    }
    ltrCounts[lowerCaseWord] = count;
  }
  return JSON.stringify(ltrCounts);
};

const phrase = "An APPLE a day keeps an Archeologist AWAY...";
const ltr = "A";

document.getElementById('ans').textContent = findOccurrences(phrase, ltr);
