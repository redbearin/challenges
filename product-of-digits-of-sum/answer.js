sumDigProd = (...args) => {
  let num = args.reduce((acc, val) => acc + val);
  let strNum;
  while (num > 9) {
    strNum = num.toString();
    num = 1;
    for (let i = 0; i < strNum.length; i++) {
      num *= +strNum[i];
    }
  }
  return num;
}


document.getElementById('ans').textContent = sumDigProd(16, 28)