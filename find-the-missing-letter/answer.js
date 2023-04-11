missingLetter = letters => {
  // create a string of letters
  const lettersStr = letters.join('');
  // compare character code and identify gap
  for (let i = 1; i < lettersStr.length; i++) {
    if (lettersStr.charCodeAt(i) !== lettersStr.charCodeAt(i - 1) + 1)
      return String.fromCharCode(lettersStr.charCodeAt(i - 1) + 1);
  }
} 

const letters = ["m", "o"];

document.getElementById('ans').textContent = missingLetter(letters);