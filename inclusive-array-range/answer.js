inclusiveArray = (num1, num2) => {
  const arr = [];
  if (num1 > num2) {
    arr.push(num1);
  }
  else {
    for (let i = num1; i <= num2; i++) {
      arr.push(i);
    }
  }
  return JSON.stringify(arr); 
}

const num1 = 2;
const num2 = 8;

document.getElementById('ans').textContent = inclusiveArray(num1, num2);