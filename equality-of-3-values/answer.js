equal = (num1, num2, num3) => {
  if (num1 === num2) {
    if (num2 === num3)
      return 3;
    else
      return 2;
  }
  else if (num2 === num3 || 
           num1 === num3) {
    return 2;
  }
  return 0;
}
const num1 = 3;
const num2 = 4;
const num3 = 1;

document.getElementById('ans').textContent = equal(num1, num2, num3);