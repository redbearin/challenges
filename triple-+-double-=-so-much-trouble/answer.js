trouble = (num1, num2) => {
  // convert integers to strings
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // find digit that is a triple in first num
  let num1Trip = '';
  let count = 0;
  for (let i = 1; i < strNum1.length; i++) {
    if (strNum1[i] === strNum1[i-1]) {
      if (count === 0)
        count += 2;
      else  
        count++;
    } 
    else {
      if (count >= 3)
        num1Trip += strNum1[i-1];
      count = 0;
    }
  }
  // find double in second numbers that
  // matches triple in first
  for (let i = 1; i < strNum2.length; i++) {
    if (strNum2[i] === strNum2[i-1] && 
        num1Trip === strNum2[i]) 
      return true; 
  }
  return false;
}

const num1 = 33789;
const num2 = 12345337;

document.getElementById('ans').textContent = trouble(num1, num2);