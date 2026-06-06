isSymmetrical = num => {
  const strNum = num.toString();
  return strNum.slice(0, Math.floor(strNum.length/2)) === strNum.slice(Math.ceil(strNum.length/2)).split('').reverse().join('')?
  true:
  false;
}

const num = 12521;

document.getElementById('ans').textContent = isSymmetrical(num);