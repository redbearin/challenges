uncensor = (str, vowels) => {
  let compStr = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') {
      compStr += vowels[count];
      count++;
    }
    else {
      compStr += str[i];
    }
  }
  return compStr;
}

const str = "Wh*r* d*d my v*w*ls g*?";
const vowels = "eeioeo";

document.getElementById('ans').textContent = uncensor(str, vowels);