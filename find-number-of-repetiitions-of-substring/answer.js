numberOfRepeats = str => {
  subStr = '';
  for (let i = 0; i < str.length; i++) {
    subStr += str[i];
    if (subStr === str.slice(i + 1, i + 1 + subStr.length)) {
      if (i + 1 + subStr.length === str.length ||
          subStr === str.slice(i + 1 + subStr.length, i + 1 + subStr.length + subStr.length))
        break;
    }
  }
  return str.length/subStr.length;
}

const str = "abab";

document.getElementById('ans').textContent = numberOfRepeats(str);