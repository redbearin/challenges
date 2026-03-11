invert = str => {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    str.charCodeAt(i) > 64 && 
        str.charCodeAt(i) < 90 ?
    newStr += str[i].toLowerCase() :
    newStr += str[i].toUpperCase();
  }
  return newStr;
}

const str = "dLROW YM sI HsEt";

document.getElementById('ans').textContent = invert(str);