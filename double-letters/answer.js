doubleLetters = word => {
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i -1])
      return true;
  }
  return false;
}

let word = "munchkin";

document.getElementById('ans').textContent = doubleLetters(word);