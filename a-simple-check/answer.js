const simpleCheck = (num1, num2) => {
  // intialize variables
  let smaller, bigger;
  // number of times smaller number
  // is exactly divisible by larger number
  let timesDivisable = 0;

  // assign larger number to bigger variable
  // assign smaller number to smaller variable
  if (num1 > num2) {
    smaller = num2;
    bigger = num1;
  }
  else {
    smaller = num1;  
    bigger = num2;
  }

  // check division 
  // continue as long as smallest
  // number has not reached zero
  while (smaller > 0) {
    if (bigger % smaller === 0)
      timesDivisable++;
    // increment numbers
    smaller--;
    bigger--;
  }
  return timesDivisable;
};

const num1 = 54;
const num2 = 17;

document.getElementById('ans').textContent = simpleCheck(num1, num2);