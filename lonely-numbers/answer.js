numbersNeedFriendsToo = num => {
  const strNum = num.toString();
  let count = 1;
  let newNum = '';
  for (let i = 1; i < strNum.length; i++) {
    if (strNum[i] !== strNum[i - 1]) {
      if (count === 1) {
        newNum += strNum[i-1].repeat(3);
        if (i === strNum.length - 1) {
          return +(newNum + strNum[i].repeat(3));
        }
      }
      else {
        newNum += strNum[i-1].repeat(count);
      }
      count = 1;
    }
    else {
      count++;
      if (i === strNum.length - 1) {
        return +(newNum + strNum[i].repeat(count));
      }
    }
  }
}

const num = 33;

document.getElementById('ans').textContent = numbersNeedFriendsToo(num);