rotatedWords = str => {
  const strArr = [... new Set(str.split(' '))];
  let count = 0;
  const rotLtrs = ["H", "I", "N", "O", "S", "X", "Z", "W", "M"];
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (rotLtrs.includes(strArr[i][j]) === false) {
        break;
      }
      if (j === strArr[i].length - 1) {
        count++;
      }
    }
  }
  return count;
}

const str = "WHO IS WHO";

document.getElementById('ans').textContent = rotatedWords(str);