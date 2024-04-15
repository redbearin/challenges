stripSentence = (str, ltrs) => {
  const ltrsArr = ltrs.split('');
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!ltrsArr.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

const str = "the quick brown fox jumps over the lazy dog";
const ltrs =  "aeiou";

document.getElementById('ans').textContent = stripSentence(str, ltrs);