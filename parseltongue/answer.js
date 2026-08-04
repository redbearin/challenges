isParselTongue = str => {
  str = str.toLowerCase().trim();
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes('s')) {
      for (let j = 0; j < strArr[i].length - 1; j++) {
        if (strArr[i][j] === 's' && strArr[i][j+1] === 's') {
          break;
        }
        if (j === strArr[i].length - 2) {
          return false;
        }
      }
    }
  }
  return true;
}

const str = "Steve likes to eat pancakes";

document.getElementById('ans').textContent = isParselTongue(str);