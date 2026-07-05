neutralise = (str1, str2) => {
  let newStr = "";
  for (let i = 0 ; i < str1.length; i++) {
    str1[i] === str2[i] ?
      newStr += str1[i] :
      newStr += '0';
  }
  return newStr;
}

const str1 = "--++--";
const str2 = "++--++";

document.getElementById('ans').textContent = neutralise(str1, str2);