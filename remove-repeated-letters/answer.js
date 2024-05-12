removeRepeats = str => {
  let newStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] != str[i - 1]) {
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "aaabbbccc";

document.getElementById('ans').textContent = removeRepeats(str); 

