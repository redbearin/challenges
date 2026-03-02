mysteryFunc = str => {
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    newStr += str[i-1].repeat(+str[i]);
  }
  return newStr;
}

const str = "C2F1E5";

document.getElementById('ans').textContent = mysteryFunc(str);