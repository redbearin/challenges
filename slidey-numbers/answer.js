isSlidey = num => {
  const numStr = num.toString();
  for (let i = 1; i < numStr.length; i++) {
    if (Math.abs(+numStr[i] - +numStr[i - 1]) !== 1) {
      return false;
    }
  }
  return true;
}

const num = 987654321;

document.getElementById('ans').textContent = isSlidey(num);