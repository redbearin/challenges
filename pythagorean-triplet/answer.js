isTriplet = (num1, num2, num3) => {
  numArr = [num1, num2, num3];
  numArr.sort((a,b) => a - b);
  if (Math.pow(numArr[0], 2) + 
      Math.pow(numArr[1], 2) === 
      Math.pow(numArr[2], 2))
    return true;
  return false;
}

const num1 = 1;
const num2 = 2;
const num3 = 3;

document.getElementById('ans').textContent = isTriplet(num1, num2, num3);