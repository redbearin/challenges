isPolydivisible = (num) => {
  const strNum = num.toString();
  for (let i = 1; i < strNum.length; i++) {
    if (+strNum.slice(0, i + 1) % (i + 1) !== 0) {
      return false;
    }
  }
  return true;
}

const num = 1232;

document.getElementById('ans').textContent = isPolydivisible(num);
