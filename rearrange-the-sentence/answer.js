rearrange = sentence => {
  const strArr = sentence.split(' ');
  const ordered = [];
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i].charCodeAt(j) > 48 &&
          strArr[i].charCodeAt(j) < 58) {
        ordered[strArr[i][j] - 1] = strArr[i].slice(0, j) + strArr[i].slice(j + 1);
      }
    }
  }
  return ordered.join(' ');
}

const str = " ";

document.getElementById('ans').textContent = rearrange(sentence);