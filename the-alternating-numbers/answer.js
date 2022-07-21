isAlternating = num => {
  const strNum = num.toString();
  let firstEven = false;
  // first digit is even;
  if (+strNum[0] % 2 === 0)
    firstEven = true;
  
  for (let i = 1; i < strNum.length; i++) {
    // first digit odd
    if (firstEven === false) {
      if (i % 2 === 0 && +strNum[i] % 2 === 0 ||
        i % 2 !== 0 && +strNum[i] % 2 !== 0)
      return false;
    }
    // first digit is even
    else {
      if (i % 2 !== 0 && +strNum[i] % 2 === 0 ||
        i % 2 === 0 && +strNum[i] % 2 === 0)
      return false;
    }

  }
  return true;
};

const num = 75;

document.getElementById('ans').textContent = isAlternating(num);