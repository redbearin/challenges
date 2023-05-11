isAlternating = num => {
  if (num < 1) {
    return false;
  }
  const numStr = num.toString();
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] % 2 && numStr[i - 1] % 2 ||
        numStr[i] % 2 === 0 && numStr[i - 1] % 2 === 0) {
      return false;
    }
  }
  return true;
}

const num = 2380;

document.getElementById('ans').textContent = isAlternating(num);