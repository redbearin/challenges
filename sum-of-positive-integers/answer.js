positiveSum = str => {
  str = str.replace(/[^-\d]+/g, ' ');
  const strArr = str.split(' ');
  let sum = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] > 0) {
      sum += +strArr[i];
    }
  }
  return sum;
}

const str = "-12#-33 13%14&-11";

document.getElementById('ans').textContent = positiveSum(str);