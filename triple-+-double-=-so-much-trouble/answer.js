trouble = (num1, num2) => {
  const num1Arr = num1.toString().split('');
  const num2Arr = num2.toString().split('');
  let count = 1;
  let num = "";
  for (let i = 1; i < num1Arr.length; i++) {
    if (num1Arr[i] === num1Arr[i-1]) {
      count++;
      if (count === 3) {
        num = num1Arr[i];
        break;
      }
    }
  }
  count = 1;
  for (let i = 1; i < num2Arr.length; i++) {
    if (num === num2Arr[i] && num2Arr[i] === num2Arr[i-1]) {
      count++;
      if (count === 2) {
        return true;
      }
    }
  }
  return false;
}

const num1 = 451999277;
const num2 = 41177722899;

document.getElementById('ans').textContent = trouble(num1, num2); 