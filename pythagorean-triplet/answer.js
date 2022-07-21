isTriplet = (num1, num2, num3) => {
  numArr = [num1, num2, num3];
  numArr.sort((a,b) => a - b);
  if (Math.pow(numArr[0], 2) + 
      Math.pow(numArr[1], 2) === 
      Math.pow(numArr[2], 2))
    return true;
  return false;
}

const num1 = 3;
const num2 = 4;
const num3 = 5;

document.getElementById('ans').textContent = isTriplet(num1, num2, num3);