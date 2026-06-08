selectLetters = (str1, str2) => {
  let newStr = '';
  for (let i = 0; i < str1.length; i++) {
    if ((str1.charCodeAt(i) < 65 || str1.charCodeAt(i) > 90) && str2.charCodeAt(i) > 64 && str2.charCodeAt(i) < 91) {
      newStr += str1[i];
    }
    else if ((str2.charCodeAt(i) < 65 || str2.charCodeAt(i) > 90) && str1.charCodeAt(i) > 64 && str1.charCodeAt(i) < 91) {
      newStr += str2[i];
    }
  }
  return newStr;
}

const str1 = "EVERYTHING";
const str2 = "SomeThings";

document.getElementById('ans').textContent = selectLetters(str1, str2);