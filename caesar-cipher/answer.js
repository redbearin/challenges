caesarCipher = (str, inc) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && 
        str.charCodeAt(i) < 123) {
      newStr += String.fromCharCode((str.charCodeAt(i) + inc - 96) % 26 + 96);
    }
    else {
      newStr += ' ';
    }
  }
  return newStr;
}

const str = "fruuhfw";
const inc = 23;

document.getElementById('ans').textContent = caesarCipher(str, inc);