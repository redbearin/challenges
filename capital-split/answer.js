capSpace = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ?
    newStr += ' ' + str[i].toLowerCase() :
    newStr += str[i];
  }
  return newStr;
}

const str = "iLoveMyTeapot";

document.getElementById('ans').textContent = capSpace(str);