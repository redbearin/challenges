spaceMeOut = str => {
  let newStr = '';
  for (let i = 0; i < str.length - 1; i++) {
    newStr += str[i] + ' ';
  }
  return newStr + str[str.length - 1];
}

const str = "far out";

document.getElementById('ans').textContent = spaceMeOut(str);