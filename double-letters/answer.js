doubleLetters = str => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return true
    }
  }
  return false;
}

const str = "loop";

document.getElementById('ans').textContent = doubleLetters(str);