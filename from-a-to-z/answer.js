gimmeTheLetters = str => {
  let diff = str.charCodeAt(2) - str.charCodeAt(0);
  let newStr = '';
  for (let i = 0; i <= diff; i++) {
    newStr += String.fromCharCode(str.charCodeAt(0) + i);
  }
  return newStr;
}

const str = "h-o";

document.getElementById('ans').textContent = gimmeTheLetters(str);