reverse = str => {
  let newStr = '';
  for (let i = str.length - 1; 0 <= i; i--) {
    /[A-Z]/.test(str[i]) ?
    newStr += str[i].toLowerCase() :
    newStr += str[i].toUpperCase();
  }
  return newStr;
}

const str = "Hello World";

document.getElementById('ans').textContent = reverse(str);