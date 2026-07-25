mysteryFunc = str => {
  let newStr = '';
  for (let i = 1; i < str.length; i += 2) {
    newStr += str[i-1].repeat(+str[i]);
  }
  return newStr;
}

const str = "A4B5C2";

document.getElementById('ans').textContent = mysteryFunc(str);