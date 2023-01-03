const lookAndSay = num => {
  const strNum = num.toString();
  let count;
  let newNum = [];
  // odd number of digits
  if (strNum.length % 2)
    return "invalid";
  // even number digits
  // go digit by digit
  for (let i = 0; i < strNum.length; i++) {
    // even digit
    if (i % 2 === 0)
      count = strNum[i];
    // odd digit
    else {
      for (let j = 0; j < count; j++) {
        newNum.push(strNum[i]);
      }
    }
  }
  return +newNum.join('');
}

const num = 231;
document.getElementById('ans').textContent = lookAndSay(num);