roundNearest = (num1, num2) => {
  if (num2) 
    return Math.ceil(num1/num2) * num2;
  else
    return Math.round(num1);
}

const num1 = 123;
const num2 = 5;

document.getElementById('ans').textContent = roundNearest(num1, num2);

