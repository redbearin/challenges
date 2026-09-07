sentenceSearcher = (str, word) => {
  const strArr = str.split('.');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase().includes(word.toLowerCase())) {
      return strArr[i].trimStart() + '.';
    }
  }
	return "";
}

const str = "I have a cat. I have a mat. Things are going swell.";
const word = "have";

document.getElementById('ans').textContent = sentenceSearcher(str, word);