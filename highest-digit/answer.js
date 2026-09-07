highestDigit = num => {
  return +num.toString().split('').sort((a,b) => b - a)[0];
}

const num = 379;

document.getElementById('ans').textContent = highestDigit(num);