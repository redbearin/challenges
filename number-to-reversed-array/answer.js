reverseArr = num => {
  const arr = [];
  const numStr = num.toString();
  for (let i = numStr.length - 1; i >= 0; i--) {
    arr.push (+numStr[i]);
  }
  return arr;
}

const num = 1485979;

document.getElementById('ans').textContent = reverseArr(num);