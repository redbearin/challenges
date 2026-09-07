endsAddTo10 = arr => {
  let strNum;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    strNum = Math.abs(arr[i]).toString();
    if (+strNum[0] + +strNum[strNum.length - 1] === 10) {
      count++;
    }
  }
  return count;
}

const arr = [19, 46, 2098];

document.getElementById('ans').textContent = endsAddTo10(arr); 