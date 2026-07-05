flipEndChars = str => {
  if (typeof str !== 'string' || str.length < 2) {
    return  "Incompatible.";
  }
  if (str[0] === str[str.length -1]) {
    return "Two's a pair."
  }
  return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
}

const str = "";

document.getElementById('ans').textContent = flipEndChars(str);