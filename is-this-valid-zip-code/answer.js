isValid = str => {
  return str.length > 5 || /[^0-9]/.test(str) ?
  false:
  true;
} 

const str = "732 32";

document.getElementById('ans').textContent = isValid(str);