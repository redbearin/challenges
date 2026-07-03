gapful = num => {
  if (num <= 100) {
    return 100;
  }
  let strNum, firLas;
  for (let i = 0; i < Infinity; i++) {
    if ((num - i) > 100) {
      strNum = (num - i).toString();
      firLas = +(strNum[0] + strNum[strNum.length - 1]);
      if ((num - i) % firLas === 0) {
        return num - i;
      }
    }
    strNum = (num + i).toString();
    firLas = +(strNum[0] + strNum[strNum.length - 1]);
    if ((num + i) % firLas === 0) {
      return num + i;
    }
  }
}
const num = 1442;

document.getElementById('ans').textContent = gapful(num);