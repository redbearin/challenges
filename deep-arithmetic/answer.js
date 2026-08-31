sum = arr => {
  // flatten array
  const flatArr = arr.flat(Infinity);
  let sum = 0;
  let num = '';
  // go element by element through each string 
  // and add numbers to sum
  for (let i = 0; i < flatArr.length; i++) {
    for (let j = 0; j < flatArr[i].length; j++) {
      if (Number.isInteger(+flatArr[i][j]) || 
            flatArr[i][j] === '-' && 
            Number.isInteger(+flatArr[i][j + 1])) {
        num += flatArr[i][j];
        if (j === flatArr[i].length - 1) {
          sum += +num; 
          num = '';
        }
      }
      else {
        if (num.length) {
          sum += +num;
          num = '';
        }
      }
    }
  }
  return sum;
}

const arr = ["1", "five", "2wenty", "thr33"];

document.getElementById('ans').textContent = sum(arr);