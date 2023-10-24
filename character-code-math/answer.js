calc = str => {
  let num1 = '';
  for (let i = 0; i < str.length; i++) {
    num1 += str.charCodeAt(i);
  }
  let num2 = num1.replace(/7/g, '1');
  let num1Sum = 0;
  let num2Sum = 0;
  for (let i = 0; i < num1.length; i++) {
    num1Sum += +num1[i];
  }
  for (let i = 0; i < num2.length; i++) {
    num2Sum += +num2[i];
  }
  return num1Sum - num2Sum;
}

const str = 'ABCDabcd';

document.getElementById('ans').textContent = calc(str);