equal = (num1, num2, num3) => {
  const numArr= [num1, num2, num3];
  if (numArr[0] === numArr[1] && 
      numArr[1] === numArr[2]) {
    return 3;
  }
  else if (numArr[0] === numArr[1] ||
           numArr[1] === numArr[2] ||
           numArr[0] === numArr[2]) {
    return 2;        
  }
  return 0;
}

const num1 = 3;
const num2 = 4;
const num3 = 3;

document.getElementById('ans').textContent = equal(num1, num2, num3);