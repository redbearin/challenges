keyboardMistakes = str => {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (/[4501]/.test(strArr[i])) {
      if (strArr[i] === '0') {
        strArr[i] = 'O';
      }
      else if (strArr[i] === '1') {
        strArr[i] = 'I';
      }
      else if (strArr[i] === '4') {
        strArr[i] = 'A';
      }
      else {
        strArr[i] = 'S';
      }
    }
  }
  return JSON.stringify(strArr.join(''));
}

const str = "MUB45H1R";

document.getElementById('ans').textContent = keyboardMistakes(str);