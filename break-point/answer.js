breakPoint = num => {
  const strNum = num.toString();
  for (let i = 1; i < strNum.length; i++) {
    if (strNum.slice(0, i).split('').map(Number).reduce((acc,val) => acc + val, 0) === strNum.slice(i).split('').map(Number).reduce((acc,val) => acc + val, 0)) {
      return true;
    }
  }
  return false;
}

const num = 10;

document.getElementById('ans').textContent = breakPoint(num);