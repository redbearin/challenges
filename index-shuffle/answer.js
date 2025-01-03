indexShuffle = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i];
  }
  for (let i = 1; i < str.length; i += 2) {
    newStr += str[i];
  }
  return newStr;
}

const str = "abcd";

document.getElementById('ans').textContent = indexShuffle(str);