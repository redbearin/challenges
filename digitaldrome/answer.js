digitaldrome = num => {
  const strNumArr = num.toString().split('');
  const noRep = [... new Set(strNumArr)];
  if (noRep.length === 1) {
    return "Repdrome";
  }
  const incr = noRep[1] - noRep[0];
  for (let i = 2; i < noRep.length; i++) {
    if (incr < 0) {
      if (noRep[i] - noRep[i-1] > 0) {
        return "Nondrome";
      }
    }
    else {
      if (noRep[i] - noRep[i-1] < 0) {
        return "Nondrome";
      }
    }
  }
  if (incr < 0) {
    return strNumArr.length === noRep.length ?
    "Katadrome":
    "Nialpdrome";
  }
  else {
    return strNumArr.length === noRep.length ?
    "Metadrome":
    "Plaindrome";
  }
}

const num = 1357;

document.getElementById('ans').textContent = digitaldrome(num);