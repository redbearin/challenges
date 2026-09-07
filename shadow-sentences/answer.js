shadowSentence = (str1, str2) => {
  const str1Arr = str1.split(' ');
  const str2Arr = str2.split(' ');
  if (str1Arr.length !== str2Arr.length) {
    return false;
  }  
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i].length !== str2Arr[i].length) {
      return false;
    }
  }
  let regex;
  for (let i = 0; i < str1Arr.length; i++) {
    regex = new RegExp("[" + str1Arr[i] + "]");
    if (regex.test(str2Arr[i])) {
      return false;
    }
  }
  return true;
}

const str1 = "his friends";
const str2 = "our company";

document.getElementById('ans').textContent = shadowSentence(str1, str2);