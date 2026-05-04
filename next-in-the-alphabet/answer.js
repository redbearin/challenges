nextLetters = s => {
  if (!s)
    return 'A';
  let sArr = s.split('');
  for (let i = sArr.length - 1; i >= 0; i--) {
    if (sArr[i] === 'Z') {
      if (i === 0){
        sArr[i] = "AA"
      }
      else {
        sArr[i] = 'A';
      }
    }
    else {
      sArr[i] = String.fromCharCode(s.charCodeAt(i) + 1);
      break;
    }
  }
  return sArr.join('');
}

const s = "A";

document.getElementById('ans').textContent = nextLetters(s);