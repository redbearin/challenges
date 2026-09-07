hangman = (str, guesses) => {
  const strArr = str.split('');
  const strArrLC = str.toLowerCase().split('');
  const punctuation = ["'", '"', ',', ':', '.', '!', '-', '_', ' '];
  const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < strArr.length; i++) {
    if (!guesses.includes(strArrLC[i]) && 
        strArrLC[i].charCodeAt(0) > 96 && 
        strArrLC[i].charCodeAt(0) < 123) {
          strArr[i] = '-';
    }
  }
  return strArr.join('');
}

const str = "He's a very naughty boy!";
const guesses = ["e", "a", "y"];

document.getElementById('ans').textContent = hangman(str, guesses);

