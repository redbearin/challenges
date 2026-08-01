asciiCapitalize = str => {
  str = str.toLowerCase();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i) % 2 === 0 && /[a-z]/.test(str[i]) ?
    newStr += String.fromCharCode(str.charCodeAt(i) - 32) :
    newStr += str[i];
  }
  return newStr;
}

const str = "Oh what a beautiful morning.";

document.getElementById('ans').textContent = asciiCapitalize(str);