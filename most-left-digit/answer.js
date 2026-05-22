leftDigit = str => {
  return +str.match(/[0-9]/);
}

const str = "TrAdE2W1n95!";

document.getElementById('ans').textContent = leftDigit(str);