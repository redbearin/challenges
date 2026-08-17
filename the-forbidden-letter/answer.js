forbiddenLetter = (ltr, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(ltr)) {
      return false;
    }
  }
  return true;
}

const ltr = "r";
const arr = ["rock", "paper", "scissors"];

document.getElementById('ans').textContent = forbiddenLetter(ltr, arr);