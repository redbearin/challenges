uncensor = (str, vowels) => {
  let idx = 0
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') {
      newStr += vowels[idx];
      idx++;
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "Wh*r* d*d my v*w*ls g*?";
const vowels = "eeioeo";

document.getElementById('ans').textContent = uncensor(str, vowels);