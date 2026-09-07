battleOutcome = num => {
  let strNum = num.toString();
  let newNumStr = '';
  for (let i = 1; i < strNum.length; i += 2) {
    if (+strNum[i] > +strNum[i - 1]) {
      newNumStr += strNum[i];
    }
    if (+strNum[i] < +strNum[i - 1]) {
      newNumStr += strNum[i - 1];
    }
    if (i === strNum.length - 2) {
      newNumStr += strNum[i + 1];
    }
  }
  return +newNumStr;
}

const num = 578921445;

document.getElementById('ans').textContent = battleOutcome(num);
