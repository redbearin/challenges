const calculator = (firstNum, operator, secondNum) => {
  if (operator === "+") 
    return firstNum + secondNum;
  if (operator === "-")  
    return firstNum - secondNum;
  if (operator === "*")  
    return firstNum * secondNum;
  if (operator === "/")  {
    if (secondNum === 0)
      return "Can't divide by 0!"
    else
      return firstNum / secondNum;
  }
};

const firstNum = 4;
const operator = '/';
const secondNum = 0;

document.getElementById('ans').textContent = calculator(firstNum, operator, secondNum);