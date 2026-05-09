simpleNumbers = (start, end) => {
  const arr = [];
  let strNum;
  let sum;
  for (let i = start; i <= end; i++) {
    if (i > 0 && i < 10) {
      arr.push(i);
    }
    else {
      strNum = i.toString();
      sum = 0;
      for (let j = 0; j < strNum.length; j++) {
        sum += Math.pow(+strNum[j], j + 1);
      }
      if (sum === i) {
        arr.push(i);
      }
    }
  }
  return JSON.stringify(arr);
}

const start = 90;
const end = 100;

document.getElementById('ans').textContent = simpleNumbers(start, end);