squareDigits = num => {
  const strNum = num.toString();
  let final = "";
  for (let i = 0; i < strNum.length; i++) {
    final += "" + Math.pow(strNum[i], 2);
  }
  return +final;
}

const num = 2483;

document.getElementById('ans').textContent = squareDigits(num);