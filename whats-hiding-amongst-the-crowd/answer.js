detectWord = str => {
  newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96) {
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "UcUNFYGaFYFYGtNUH";

document.getElementById('ans').textContent = detectWord(str);