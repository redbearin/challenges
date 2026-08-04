removeLastVowel = str => {
  const strArr = str.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', "U"];
  for (let i = 0; i < strArr.length; i++) {
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      if (vowels.includes(strArr[i][j])) {
        strArr[i] = strArr[i].slice(0, j) + strArr[i].slice(j + 1);
        break;
      }
    }
  }
  return strArr.join(' ');
}

const str = "Those who dare to fail miserably can achieve greatly.";

document.getElementById('ans').textContent = removeLastVowel(str);