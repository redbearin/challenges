reverseCase = str => {
  let newStr = '';
  let code;
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (code > 64 && code < 91 || code > 96 && code < 123) {
      if (code > 96) {
        newStr += String.fromCharCode(code - 32);
      }
      else {
        newStr += String.fromCharCode(code + 32);
      }
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "Happy Birthday";

document.getElementById('ans').textContent = reverseCase(str);