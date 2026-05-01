isCentral = str => {
  if (str.length === 1) {
    return true;
  }
  let index;
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== ' ') {
      index = i;
      break;
    }
  }
  if (index && index === Math.floor(str.length/2)) {
    return true;
  }
  return false;
}

const str = "  #  ";

document.getElementById('ans').textContent = isCentral(str);