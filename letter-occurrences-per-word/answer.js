findOccurrences = (str, char) => {
  const strArr = str.split(' ');
  char = char.toLowerCase();
  const countsByWord = {};
  let count, word;
  for (let i = 0; i < strArr.length; i++) {
    count = 0;
    word = strArr[i].toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (word[j] === char)
        count++;
    }
    countsByWord[word] = count;
  }
  return JSON.stringify(countsByWord);
}

const str = "Hello World";
const char = "o";

document.getElementById('ans').textContent = findOccurrences(str, char);

