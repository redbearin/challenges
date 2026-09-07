alliterationCorrect = str => {
  str = str.replace(/[.!?,]/g, "").toLowerCase();
  const strArr = str.split(' ');
  let base = '*';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 3) {
      if (base === '*') {
        base = strArr[i][0];
      }
      if (strArr[i][0] !== base) {
        return false;
      }
    }
  }
  return true;
}

const str = 'She swam to the shore.';

document.getElementById('ans').textContent = alliterationCorrect(str);