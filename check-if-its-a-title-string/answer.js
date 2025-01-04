checkTitle = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].charCodeAt(0) < 65 || strArr[i].charCodeAt(0) > 90) {
      return false;
    }
  }
  return true;
}

const str = "A Mind Boggling Achievement";

document.getElementById('ans').textContent = checkTitle(str);