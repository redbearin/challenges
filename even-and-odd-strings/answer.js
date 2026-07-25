evenOddString = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i];
  }
  newStr += ' ';
  for (let i = 1; i < str.length; i += 2) {
    newStr += str[i];
  }
  return newStr;
}

const str = "mubashir";

document.getElementById('ans').textContent = evenOddString(str);