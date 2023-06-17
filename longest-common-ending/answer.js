longestCommonEnding = (str1, str2) => {
  let ending = '';
  let len;

  str1.length > str2.length ? 
    len = str1.length : 
    len = str2.length;

  for (let i = 1; i < len; i++) {
    if (str1[str1.length - i] !== str2[str2.length - i]) {
      return ending;
    }
    ending = str1[str1.length - i] + ending;
  }
  return ending;
}

const str1 = "multiplication";
const str2 = "ration";

document.getElementById('ans').textContent = longestCommonEnding(str1, str2);