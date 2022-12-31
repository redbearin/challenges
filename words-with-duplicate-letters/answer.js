noDuplicateLetters = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if ([... new Set(strArr[i].toLowerCase().split(''))].length !== strArr[i].length) {
      return false;
    }
  }
  return true;
}
const str = "Always be closing.";

document.getElementById('ans').textContent = noDuplicateLetters(str);