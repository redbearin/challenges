const lunarSum = (num1, num2) => {
  const numsArr = [num1.toString(), num2.toString()].sort((a,b) => a.length - b.length);
 
  let moonWeight = '';
  for (let i = 0; i < numsArr[1].length; i++) {
      numsArr[1][numsArr[1].length - (1 + i)] >= numsArr[0][numsArr[0].length - (1 + i)] || numsArr[0][numsArr[0].length - (1 + i)] === undefined ?
      moonWeight = numsArr[1][numsArr[1].length - (1 + i)] + moonWeight :
      moonWeight = numsArr[0][numsArr[0].length - (1 + i)] + moonWeight;
  }
  return +moonWeight;
}

const num1 = 44;
const num2 = 198;

document.getElementById('ans').textContent = lunarSum(num1, num2);