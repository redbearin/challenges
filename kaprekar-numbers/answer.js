isKaprekar = num => {
  const sqr = num ** 2;
  const strNum = sqr.toString();
  if (strNum.length === 1) {
    if (sqr === num) {
      return true;
    }
  }
  console.log(+strNum.slice(0, Math.floor(strNum.length/2)))
  console.log(+strNum.slice(Math.floor(strNum.length/2)))
  if (+strNum.slice(0, Math.floor(strNum.length/2)) + +strNum.slice(Math.floor(strNum.length/2)) === num) {
    console.log('inside')
    return true;
  }
  return false;
}

const num = 9;

document.getElementById('ans').textContent = isKaprekar(num);