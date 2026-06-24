isAlpha = str => {
  str = str.replace(/([^A-Za-z])/g, "").toLowerCase();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i) - 96;
  }
  return sum % 2 ?
  false:
  true;
}

const str = "i'am king";

document.getElementById('ans').textContent = isAlpha(str);