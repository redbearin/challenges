containsDigit = str => {
  return /[0-9]/.test(str);
}

const str =   "abwekz";

document.getElementById('ans').textContent = containsDigit(str);