findDigitAmount = num => {
  return num.toString().length;
}

const num = 123;

document.getElementById('ans').textContent = findDigitAmount(num);