const simpleCheck = (num1, num2) => {
  if (num2 > num1) {
    small = num1;
    big = num2;
  }
  else {
    small = num2;
    big = num1;
  }
  let count = 0; 
  while (small  > 0) {
    if (big % small === 0) {
      count++;
    }
    big--;
    small--;
  }
  return count;
}

const num1 = 54;
const num2 = 17;

document.getElementById('ans').textContent = simpleCheck(num1, num2);