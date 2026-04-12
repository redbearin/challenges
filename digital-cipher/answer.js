digitalCipher = (word, num) => {
  const strNum = num.toString();
  const encoded = [];
  let strNumIdx;
  // letter by letter through word
  for (let i = 0; i < word.length; i++) {
    // index in number
    if ((i + 1) % strNum.length === 0)
      strNumIdx = strNum.length - 1;
    else {
      strNumIdx = (i + 1) % strNum.length - 1;
    }
    encoded.push(word.charCodeAt(i) - 96 + +strNum[strNumIdx]);
  }
  return JSON.stringify(encoded);
}

const word = "edabit";
const num = 100;

document.getElementById('ans').textContent =  digitalCipher(word, num);